import { type Question } from '../services/geminiService';
import { english2017Exam } from './english2017Exam';
import { math2017Exam } from './math2017Exam';
import { chemistry2017Exam } from './chemistry2017Exam';
import { physics2017Exam } from './physics2017Exam';
import { biology2017Exam } from './biology2017Exam';
import { aptitude2017Exam } from './aptitude2017Exam';

import { english2016Exam } from './english2016Exam';
import { biology2016Exam } from './biology2016Exam';
import { chemistry2016Exam } from './chemistry2016Exam';
import { physics2016Exam } from './physics2016Exam';
import { math2016Exam } from './math2016Exam';
import { aptitude2016Exam } from './aptitude2016Exam';

import { biology2015Exam } from './biology2015Exam';
import { math2015Exam } from './math2015Exam';
import { chemistry2015Exam } from './chemistry2015Exam';
import { english2015Exam } from './english2015Exam';
import { physics2015Exam } from './physics2015Exam';

export { english2017Exam } from './english2017Exam';
export { math2017Exam } from './math2017Exam';
export { chemistry2017Exam } from './chemistry2017Exam';
export { physics2017Exam } from './physics2017Exam';
export { biology2017Exam } from './biology2017Exam';
export { aptitude2017Exam } from './aptitude2017Exam';

export { english2016Exam } from './english2016Exam';
export { biology2016Exam } from './biology2016Exam';
export { chemistry2016Exam } from './chemistry2016Exam';
export { physics2016Exam } from './physics2016Exam';
export { math2016Exam } from './math2016Exam';
export { aptitude2016Exam } from './aptitude2016Exam';

export { biology2015Exam } from './biology2015Exam';
export { math2015Exam } from './math2015Exam';
export { chemistry2015Exam } from './chemistry2015Exam';
export { english2015Exam } from './english2015Exam';
export { physics2015Exam } from './physics2015Exam';

// Primary Default 2017 E.C. (2025 G.C.) ESSLCE Exams
export const englishSampleExam = english2017Exam;
export const mathSampleExam = math2017Exam;
export const chemistrySampleExam = chemistry2017Exam;
export const physicsSampleExam = physics2017Exam;
export const biologySampleExam = biology2017Exam;
export const aptitudeSampleExam = aptitude2017Exam;

export const default2017Exams = [
  english2017Exam,
  math2017Exam,
  chemistry2017Exam,
  physics2017Exam,
  biology2017Exam,
  aptitude2017Exam
];

export const default2016Exams = [
  english2016Exam,
  math2016Exam,
  chemistry2016Exam,
  physics2016Exam,
  biology2016Exam,
  aptitude2016Exam
];

export const default2015Exams = [
  english2015Exam,
  math2015Exam,
  physics2015Exam,
  chemistry2015Exam,
  biology2015Exam
];

export const allOfficialExams = [
  ...default2017Exams,
  ...default2016Exams,
  ...default2015Exams
];

export const sampleExams = allOfficialExams;


