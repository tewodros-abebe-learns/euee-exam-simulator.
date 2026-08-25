const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

// Fix handleFinishExam type
code = code.replace(/const handleFinishExam = async \(answers: Record<string, string>\) => \{/, `const handleFinishExam = async (answers: Record<string, string> = {}) => {`);

// Fix saveExamLocally args
code = code.replace(/await saveExamLocally\(newExamId, examData\);/g, `await saveExamLocally({ id: newExamId, ...examData });`);

// Fix score logic (correctAnswerIndex)
code = code.replace(/if \(answers\[q\.id\] === q\.correctAnswer\) score\+\+;/g, `if (parseInt(answers[q.id]) === q.correctAnswerIndex) score++;`);

// Fix saveSessionLocally args
code = code.replace(/await saveSessionLocally\(newSessionId, sessionData\);/g, `await saveSessionLocally({ id: newSessionId, status: 'COMPLETED', ...sessionData });`);


// Fix Home
code = code.replace(/<Home[\s\S]*?\/>/, `<Home
              key="home"
              onStartNew={() => setView('UPLOAD')}
              onContinue={() => {}}
              onRetake={() => {}}
              onViewSummary={() => {}}
            />`);

// Fix SubjectDetail
code = code.replace(/<SubjectDetail[\s\S]*?\/>/, `<SubjectDetail
              key="subject_detail"
              subject={selectedSubject || ''}
              onBack={() => setView('DASHBOARD')}
              onContinue={() => {}}
              onRetake={() => {}}
              onViewSummary={() => {}}
              onUpload={handleFileUpload}
              onProcessText={handleTextSubmit}
              isParsing={isParsing}
            />`);

// Fix Dashboard
code = code.replace(/<Dashboard[\s\S]*?\/>/, `<Dashboard 
              key="dashboard" 
              onStartNew={() => setView('UPLOAD')}
              onContinue={() => {}} 
              onRetake={() => {}} 
              onViewSummary={() => {}} 
              onSelectSubject={(subj) => { setSelectedSubject(subj); setView('SUBJECT_DETAIL'); }} 
            />`);

// Fix ExamInterface
code = code.replace(/<ExamInterface[\s\S]*?\/>/, `<ExamInterface
              key="exam"
              questions={examQuestions}
              timeLimit={timeLimit || 0}
              onComplete={handleFinishExam}
              onBack={() => setView('DASHBOARD')}
              saveAnswer={(qId, ans) => setUserAnswers(prev => ({...prev, [qId]: ans}))}
              initialAnswers={userAnswers}
              startTime={startTime || Date.now()}
              examTitle={examTitle}
              subject={selectedSubject || 'General'}
              grade={selectedGrade || 'General'}
            />`);

// Fix SummaryPage
code = code.replace(/<SummaryPage[\s\S]*?\/>/, `<SummaryPage
              key="summary"
              questions={examQuestions}
              userAnswers={userAnswers}
              title={examTitle}
              onReset={() => setView('DASHBOARD')}
            />`);

fs.writeFileSync('src/App.tsx', code);
