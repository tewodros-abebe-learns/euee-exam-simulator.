import { parseExamHeuristically } from "../lib/heuristicExamParser";
import { normalizeExamData } from "../lib/examNormalizer";

export interface Question {
  id: string;
  section?: string;
  instruction?: string;
  passage?: string;
  context?: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface ExamData {
  title: string;
  questions: Question[];
}

export interface GenerateExamOptions {
  rawText?: string;
  fileBase64?: string;
  mimeType?: string;
  fileName?: string;
  titleHint?: string;
}

export async function generateExamFromDocument(options: GenerateExamOptions): Promise<ExamData> {
  const { rawText, fileBase64, mimeType, fileName, titleHint } = options;

  try {
    const response = await fetch("/api/generate-exam", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        rawText: rawText || "",
        fileBase64,
        mimeType,
        fileName
      })
    });

    const data = await response.json();

    if (!response.ok) {
      // If AI server returned an error (e.g. 503, 429, 500), try client-side heuristic parser as fallback
      if (rawText) {
        const fallbackParsed = parseExamHeuristically(rawText, titleHint || fileName || "Extracted Exam");
        if (fallbackParsed && fallbackParsed.questions.length > 0) {
          console.info(`AI parsing failed (${data.error || response.statusText}), successfully recovered with offline heuristic extractor (${fallbackParsed.questions.length} questions).`);
          return normalizeExamData(fallbackParsed);
        }
      }
      throw new Error(data.error || "Failed to generate exam.");
    }

    if (!data.questions || data.questions.length === 0) {
      if (rawText) {
        const fallbackParsed = parseExamHeuristically(rawText, titleHint || fileName || "Extracted Exam");
        if (fallbackParsed && fallbackParsed.questions.length > 0) {
          return normalizeExamData(fallbackParsed);
        }
      }
      throw new Error("No valid questions could be extracted from this document.");
    }

    return normalizeExamData(data);
  } catch (error: any) {
    console.error("Exam Generation Service Error:", error);
    
    // Attempt heuristic parser as fallback if rawText exists
    if (rawText) {
      const fallbackParsed = parseExamHeuristically(rawText, titleHint || fileName || "Extracted Exam");
      if (fallbackParsed && fallbackParsed.questions.length > 0) {
        console.info(`Recovered from error with local heuristic extractor: ${fallbackParsed.questions.length} questions parsed.`);
        return normalizeExamData(fallbackParsed);
      }
    }

    throw new Error(error.message || "Failed to parse exam questions from the document.");
  }
}

export async function generateExamFromText(rawText: string, titleHint?: string): Promise<ExamData> {
  return generateExamFromDocument({ rawText, titleHint });
}

