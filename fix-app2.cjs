const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

// Fix createdAt string to number
code = code.replace(/createdAt: new Date\(\)\.toISOString\(\)/g, `createdAt: Date.now()`);
code = code.replace(/completedAt: new Date\(\)\.toISOString\(\)/g, `completedAt: Date.now()`);

// Fix saveSessionLocally properties
code = code.replace(/await saveSessionLocally\(\{ id: newSessionId, status: 'COMPLETED', \.\.\.sessionData \}\);/g, `await saveSessionLocally({ id: newSessionId, status: 'COMPLETED', startTime: startTime || Date.now(), timeLimit: timeLimit || 0, lastUpdated: Date.now(), syncedWithCloud: false, ...sessionData });`);

// Fix ExamInterface saveProgress, isDarkMode
code = code.replace(/grade=\{selectedGrade \|\| 'General'\}/g, `grade={selectedGrade || 'General'}
              saveProgress={saveProgress}
              isDarkMode={isDarkMode}`);

fs.writeFileSync('src/App.tsx', code);
