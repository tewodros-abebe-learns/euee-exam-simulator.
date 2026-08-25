import { processExamGeneration } from "../src/server/examService";

export default async function handler(req: any, res: any) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("X-Content-Type-Options", "nosniff");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  try {
    const clientIp = (req.headers && req.headers["x-forwarded-for"] as string) || (req.socket && req.socket.remoteAddress) || "unknown";
    const body = typeof req.body === "string" ? JSON.parse(req.body) : (req.body || {});
    const result = await processExamGeneration(body, clientIp);
    return res.status(result.status).json(result.data);
  } catch (error: any) {
    console.error("API Serverless Error:", error);
    const errMsg = error?.message || String(error);
    if (errMsg.includes("429") || errMsg.includes("Too Many Requests") || errMsg.includes("RESOURCE_EXHAUSTED")) {
      return res.status(429).json({ error: "AI generation quota or rate limit reached. Please wait a moment and try again." });
    }
    if (errMsg.includes("SAFETY") || errMsg.includes("blocked")) {
      return res.status(403).json({ error: "The document content was flagged by safety filters. Please try a different file." });
    }
    return res.status(500).json({ error: errMsg || "Failed to parse exam questions from the document." });
  }
}
