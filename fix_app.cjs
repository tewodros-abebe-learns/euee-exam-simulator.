const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

const target = `      const examData = {
        title: computedTitle,
        subject: options.subject || 'General',
        grade: options.grade || 'General',
        questions: result.questions,
        createdBy: currentUser?.uid || 'guest',
        createdAt: Date.now(),
        isSample: false,
        source: 'custom' as const
      };
      
      await saveExamLocally({ id: newExamId, ...examData });
      
      if (currentUser && isOnline) {
        try {
          const docRef = await addDoc(collection(db, 'exams'), {
            title: examData.title,
            subject: examData.subject,
            grade: examData.grade,
            questions: examData.questions,
            createdBy: currentUser.uid,
            createdAt: serverTimestamp()
          });
          setCurrentExamId(docRef.id);
          await saveExamLocally({ id: docRef.id, ...examData });
        } catch(e) {
          console.warn("Could not save exam to Firestore, cached locally:", e);
          setCurrentExamId(newExamId);
        }
      } else {
        setCurrentExamId(newExamId);
      }
      
      setView('TIMER_SELECTION');`;

const replacement = `      const examData = {
        title: computedTitle,
        subject: options.subject || 'General',
        grade: options.grade || 'General',
        questions: result.questions,
        createdBy: currentUser?.uid || 'guest',
        createdAt: Date.now(),
        isSample: false,
        source: 'custom' as const
      };
      
      if (currentUser && isOnline) {
        try {
          const docRef = await addDoc(collection(db, 'exams'), {
            title: examData.title,
            subject: examData.subject,
            grade: examData.grade,
            questions: examData.questions,
            createdBy: currentUser.uid,
            createdAt: serverTimestamp()
          });
          setCurrentExamId(docRef.id);
          await saveExamLocally({ id: docRef.id, ...examData });
        } catch(e) {
          console.warn("Could not save exam to Firestore, cached locally:", e);
          setCurrentExamId(newExamId);
          await saveExamLocally({ id: newExamId, ...examData });
        }
      } else {
        setCurrentExamId(newExamId);
        await saveExamLocally({ id: newExamId, ...examData });
      }
      
      setView('TIMER_SELECTION');`;

if (content.includes(target)) {
  content = content.replace(target, replacement);
  fs.writeFileSync('src/App.tsx', content);
  console.log('Successfully replaced');
} else {
  console.log('Target not found in App.tsx');
}
