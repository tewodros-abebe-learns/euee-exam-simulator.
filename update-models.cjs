const fs = require('fs');
let code = fs.readFileSync('src/server/examService.ts', 'utf8');

code = code.replace(
/const CANDIDATE_MODELS = \[\s*"gemini-3.7-flash",\s*\/\/[^\n]+\n\s*"gemini-3.1-flash-lite",\s*\/\/[^\n]+\n\s*"gemini-flash-latest",\s*\/\/[^\n]+\n\s*"gemini-3.1-pro-preview"\s*\/\/[^\n]+\n\s*\];/g,
`const CANDIDATE_MODELS = [
    "gemini-2.5-flash",
    "gemini-2.0-flash",
    "gemini-1.5-flash",
    "gemini-2.5-pro"
  ];`
);

fs.writeFileSync('src/server/examService.ts', code);
