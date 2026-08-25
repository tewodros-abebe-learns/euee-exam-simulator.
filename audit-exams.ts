import { allOfficialExams } from './src/data/sampleExams';

let totalExams = allOfficialExams.length;
let issues: string[] = [];

allOfficialExams.forEach((exam, eIdx) => {
  if (!exam.title) issues.push(`Exam ${eIdx} missing title`);
  if (!Array.isArray(exam.questions)) {
    issues.push(`Exam ${exam.title || eIdx} questions is not an array`);
    return;
  }
  const idSet = new Set();
  exam.questions.forEach((q, qIdx) => {
    if (!q.id) issues.push(`Exam '${exam.title}' Q${qIdx+1} missing id`);
    if (idSet.has(q.id)) issues.push(`Exam '${exam.title}' duplicate id ${q.id}`);
    idSet.add(q.id);

    if (!q.question || typeof q.question !== 'string' || q.question.trim() === '') {
      issues.push(`Exam '${exam.title}' Q${qIdx+1} (${q.id}) empty question`);
    }
    if (!Array.isArray(q.options) || q.options.length < 2) {
      issues.push(`Exam '${exam.title}' Q${qIdx+1} (${q.id}) options invalid (<2 options)`);
    }
    if (typeof q.correctAnswerIndex !== 'number' || q.correctAnswerIndex < 0 || (q.options && q.correctAnswerIndex >= q.options.length)) {
      issues.push(`Exam '${exam.title}' Q${qIdx+1} (${q.id}) invalid correctAnswerIndex: ${q.correctAnswerIndex} (options len: ${q.options ? q.options.length : 0})`);
    }
    if (q.options) {
      q.options.forEach((opt, oIdx) => {
        if (opt === undefined || opt === null) {
          issues.push(`Exam '${exam.title}' Q${qIdx+1} (${q.id}) option index ${oIdx} is undefined/null`);
        }
      });
    }
  });
});

console.log(`Audited ${totalExams} official exams.`);
if (issues.length === 0) {
  console.log('No data corruption issues found in official exams!');
} else {
  console.log(`Found ${issues.length} issues:`);
  issues.forEach(i => console.log(' - ' + i));
}
