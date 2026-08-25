import { ExamData, Question } from "../services/geminiService";
import { normalizeExamData } from "./examNormalizer";

export function parseExamHeuristically(rawText: string, defaultTitle: string = "Extracted Exam"): ExamData | null {
  if (!rawText || !rawText.trim()) return null;

  const lines = rawText.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  if (lines.length === 0) return null;

  const questions: Question[] = [];
  
  let currentSection = "";
  let currentInstruction = "";
  let currentPassage = "";
  let currentContext = "";
  let currentQuestionText = "";
  let currentOptions: string[] = [];
  let currentAnswerIndex = 0;
  let currentExplanation = "";
  let currentId = 1;

  // Regex patterns
  const questionStartRegex = /^(?:Question\s*|Q\s*)?(\d+)[\.\)\:\-]\s*(.*)/i;
  const standaloneNumberRegex = /^(\d+)[\.\)]?$/;
  const optionRegex = /^(?:[•\-\*]\s*)?[(\[]?([A-Ea-e1-4])[)\]\.\:\-]\s*(.*)/;
  const answerRegex = /^(?:Correct\s*)?(?:Answer|Ans|Key|Option)[\s\:\-]+([A-Ea-e1-4]|\d+)/i;
  const explanationRegex = /^(?:Explanation|Reason|Solution|Note)[\s\:\-]+(.*)/i;
  const sectionHeaderRegex = /^(?:SECTION\s+[A-Z0-9]+|PART\s+[A-Z0-9]+|CHAPTER\s+[A-Z0-9]+)[\s\:\-]*(.*)/i;
  const directionRegex = /^(?:DIRECTIONS?|INSTRUCTIONS?)[\s\:\-]+(.*)/i;
  const passageHeaderRegex = /^(?:Reading\s+Passage|Passage\s+[A-Z0-9]+|Passage)[\s\:\-]*(.*)/i;

  function commitCurrentQuestion() {
    const qText = currentQuestionText.trim();
    if (qText) {
      let opts = [...currentOptions];
      if (opts.length < 2) {
        // Fallback default options if question was found without explicit options
        opts = [
          "Option A",
          "Option B",
          "Option C",
          "Option D"
        ];
      }

      questions.push({
        id: `q-${currentId++}`,
        section: currentSection.trim() || undefined,
        instruction: currentInstruction.trim() || undefined,
        passage: currentPassage.trim() || undefined,
        context: currentContext.trim() || undefined,
        question: qText,
        options: opts.map(opt => opt.trim()),
        correctAnswerIndex: currentAnswerIndex >= 0 && currentAnswerIndex < opts.length ? currentAnswerIndex : 0,
        explanation: currentExplanation.trim() || "Extracted from source document."
      });

      // Clear single question context
      currentContext = "";
    }
    currentQuestionText = "";
    currentOptions = [];
    currentAnswerIndex = 0;
    currentExplanation = "";
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Check for Section Header (e.g. SECTION ONE: VERBAL REASONING)
    const secMatch = line.match(sectionHeaderRegex);
    if (secMatch && !currentQuestionText) {
      commitCurrentQuestion();
      currentSection = line;
      if (!/reading|passage|comprehension/i.test(line)) {
        currentPassage = "";
      }
      continue;
    }

    // Check for Directions / Instructions
    const dirMatch = line.match(directionRegex);
    if (dirMatch && !currentQuestionText) {
      commitCurrentQuestion();
      currentInstruction = line;
      if (!/passage|read the following|comprehension/i.test(line)) {
        currentPassage = "";
      }
      continue;
    }

    // Check for Passage Header
    const passMatch = line.match(passageHeaderRegex);
    if (passMatch && !currentQuestionText) {
      currentPassage = (currentPassage ? currentPassage + "\n\n" : "") + line;
      continue;
    }

    // Check for standalone number line (e.g. "1." or "1")
    const standNumMatch = line.match(standaloneNumberRegex);
    if (standNumMatch) {
      commitCurrentQuestion();
      currentQuestionText = `Question ${standNumMatch[1]}`;
      continue;
    }

    // Check for new Question start (e.g. 1. or Q1 or Question 1:)
    const qMatch = line.match(questionStartRegex);
    if (qMatch && !line.match(optionRegex) && !line.match(answerRegex)) {
      commitCurrentQuestion();
      currentQuestionText = qMatch[2] ? qMatch[2].trim() : `Question ${qMatch[1]}`;
      continue;
    }

    // Check if line ends with '?' and we don't have an active question
    if (line.endsWith('?') && !currentQuestionText) {
      commitCurrentQuestion();
      currentQuestionText = line;
      continue;
    }

    // Check for Option (A), B), • A:, etc.)
    const optMatch = line.match(optionRegex);
    if (optMatch && currentQuestionText) {
      const rawKey = optMatch[1].toUpperCase();
      const text = optMatch[2] ? optMatch[2].trim() : "";
      if (['A', 'B', 'C', 'D', 'E'].includes(rawKey)) {
        currentOptions.push(text || line);
      } else if (!isNaN(parseInt(rawKey, 10))) {
        currentOptions.push(text || line);
      } else {
        currentOptions.push(text || line);
      }
      continue;
    }

    // Check for Answer key
    const ansMatch = line.match(answerRegex);
    if (ansMatch) {
      const val = ansMatch[1].toUpperCase();
      if (['A', 'B', 'C', 'D', 'E'].includes(val)) {
        currentAnswerIndex = val.charCodeAt(0) - 65;
      } else if (!isNaN(parseInt(val, 10))) {
        currentAnswerIndex = Math.max(0, parseInt(val, 10) - 1);
      }
      continue;
    }

    // Check for Explanation
    const expMatch = line.match(explanationRegex);
    if (expMatch) {
      currentExplanation = expMatch[1] ? expMatch[1].trim() : "";
      continue;
    }

    // Otherwise append text
    if (currentOptions.length > 0) {
      if (currentExplanation) {
        currentExplanation += " " + line;
      } else {
        currentOptions[currentOptions.length - 1] += " " + line;
      }
    } else if (currentQuestionText) {
      currentQuestionText += " " + line;
    } else {
      // If we are before question, could be passage or context
      if (currentPassage) {
        currentPassage += "\n" + line;
      } else if (currentInstruction) {
        currentInstruction += " " + line;
      } else {
        currentContext = (currentContext ? currentContext + "\n" : "") + line;
      }
    }
  }

  // Commit final question
  commitCurrentQuestion();

  // If still no questions found, but we have text lines, create questions from sentences/paragraphs
  if (questions.length === 0 && lines.length > 0) {
    const fullContent = lines.join(" ");
    const sentences = fullContent.split(/(?<=[.?!])\s+/).filter(s => s.trim().length > 15);
    
    sentences.slice(0, 10).forEach((sentence, idx) => {
      questions.push({
        id: `q-fallback-${idx + 1}`,
        section: "General Comprehension",
        instruction: "Read the excerpt below and determine the correct assertion.",
        context: "Extracted from study notes / text material",
        question: `Based on the material: "${sentence.slice(0, 120)}${sentence.length > 120 ? '...' : ''}", which statement is correct?`,
        options: [
          sentence.slice(0, 100),
          "This statement is contradicted by the text.",
          "The text provides no information regarding this topic.",
          "None of the above statements are supported."
        ],
        correctAnswerIndex: 0,
        explanation: "The selected sentence directly reflects the conceptual assertion in the text."
      });
    });
  }

  if (questions.length === 0) {
    return null;
  }

  return normalizeExamData({
    title: defaultTitle,
    questions
  });
}

