import type { Question, ExamData } from '../services/geminiService';

/**
 * Normalizes exam questions so that:
 * 1. Passages are reliably attached to ALL questions that belong to that reading passage.
 * 2. Section names are uniformly maintained across question groups.
 * 3. Instructions are preserved on questions.
 */
export function normalizeExamQuestions(questions: Question[]): Question[] {
  if (!questions || questions.length === 0) return [];

  let currentSection: string | undefined = undefined;
  let currentPassage: string | undefined = undefined;
  let currentPassageSection: string | undefined = undefined;

  return questions.map((q) => {
    // 1. Section tracking
    if (q.section && q.section.trim().length > 0) {
      currentSection = q.section.trim();
    }

    // 2. Passage tracking:
    // If an explicit new passage is provided, update active passage
    if (q.passage && q.passage.trim().length > 0) {
      currentPassage = q.passage.trim();
      currentPassageSection = currentSection;
    } else if (currentPassage) {
      // Check if current question has exited the reading passage section
      const isNewNonReadingSection = !!(
        currentSection &&
        currentPassageSection &&
        currentSection.toLowerCase() !== currentPassageSection.toLowerCase()
      );

      const isNonReadingInstruction = !!(
        q.instruction &&
        /vocabulary|grammar|analogy|antonym|synonym|solve each|mathematical|quantitative|dialogue|rearrange|reorder|formal letter/i.test(
          q.instruction
        )
      );

      if (isNewNonReadingSection || isNonReadingInstruction) {
        currentPassage = undefined;
        currentPassageSection = undefined;
      }
    }

    return {
      ...q,
      section: q.section?.trim() || currentSection,
      passage: q.passage?.trim() || currentPassage,
      instruction: q.instruction?.trim() || undefined,
      context: q.context?.trim() || undefined,
      question: q.question?.trim() || '',
      options: (q.options || []).map((opt) => (typeof opt === 'string' ? opt.trim() : String(opt))),
      explanation: q.explanation?.trim() || 'Extracted from exam material.'
    };
  });
}

/**
 * Normalizes an entire ExamData object.
 */
export function normalizeExamData(exam: ExamData): ExamData {
  return {
    ...exam,
    questions: normalizeExamQuestions(exam.questions || [])
  };
}
