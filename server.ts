import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import { processExamGeneration } from "./src/server/examService";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  // ==========================================
  // Proxy & Security Middlewares
  // ==========================================
  // Enable trust proxy for Cloud Run and reverse proxies (ensures rate-limiting correctly identifies clients)
  app.set("trust proxy", 1);
  app.disable("x-powered-by");
  
  // Use Helmet for robust HTTP security headers
  app.use(helmet({
    contentSecurityPolicy: false, // Disabled for local dev/Vite, restrict in production
    crossOriginOpenerPolicy: false, // REQUIRED for Firebase Auth popups to work in iframes
    crossOriginResourcePolicy: false, // REQUIRED for cross-origin popup messaging
    frameguard: false, // REQUIRED for AI Studio preview iframe to work
  }));

  // Enable CORS (Cross-Origin Resource Sharing) for decoupled hosting
  app.use(cors({
    origin: process.env.CORS_ORIGIN || '*', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));

  // Rate Limiting (Prevent abuse / DDoS on API routes)
  const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window`
    standardHeaders: true, 
    legacyHeaders: false, 
    validate: {
      xForwardedForHeader: false,
      forwardedHeader: false,
    },
    message: { error: "Too many requests, please try again later." }
  });

  const aiGenerationLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 20, // Limit AI generations to 20 per hour per IP
    standardHeaders: true, 
    legacyHeaders: false, 
    validate: {
      xForwardedForHeader: false,
      forwardedHeader: false,
    },
    message: { error: "AI generation quota reached for this hour. Please try again later." }
  });

  app.use(express.json({ limit: '25mb' }));

  // Apply general limiter to all API routes
  app.use("/api/", apiLimiter);

  // API routes FIRST
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Apply strict limiter to AI generation
  app.post("/api/generate-exam", aiGenerationLimiter, async (req, res) => {
    try {
      const clientIp = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || 'unknown';
      const result = await processExamGeneration(req.body, clientIp);
      res.status(result.status).json(result.data);
    } catch (error: any) {
      console.error("Server API Error:", error);
      const errMsg = error?.message || String(error);
      if (errMsg.includes("429") || errMsg.includes("Too Many Requests") || errMsg.includes("RESOURCE_EXHAUSTED") || errMsg.includes("resource_exhausted")) {
        return res.status(429).json({ error: "AI generation quota or rate limit reached. Please wait a moment or check your API quota, then try again." });
      }
      if (errMsg.includes("SAFETY") || errMsg.includes("blocked")) {
        return res.status(403).json({ error: "The document content was flagged by safety filters. Please try a different file." });
      }
      if (errMsg.includes("404") || errMsg.includes("NOT_FOUND")) {
        return res.status(404).json({ error: "The requested AI model could not be found. Please retry." });
      }

      res.status(500).json({ error: errMsg || "Failed to parse exam questions from the document." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

