# ESSLCE National Exam Prep Platform

Welcome to the **ESSLCE National Exam Prep Platform**! This is a robust, offline-first educational application designed specifically for Ethiopian students to practice past national exams and generate custom quizzes using the power of AI.

## 📖 Description

This platform provides a seamless, interactive environment for high school students preparing for the Ethiopian Secondary School Leaving Certificate Examination (ESSLCE). It comes pre-loaded with official exams from 2015 to 2017 E.C. across major subjects including Biology, Chemistry, Physics, Mathematics, English, and Scholastic Aptitude. 

Built with a strong focus on accessibility, the application features an **Offline-First Storage Engine**. Once you load the app, all exams are cached locally on your device using IndexedDB, allowing you to study seamlessly without an active internet connection. 

Furthermore, the platform integrates Advanced AI to let you upload your own PDFs or study notes and instantly convert them into interactive, structured multiple-choice tests.

## 🚀 How to Use the App

1. **Take a Practice Exam:**
   - On the home dashboard, browse the pre-loaded official ESSLCE past papers or filter them by subject and grade.
   - Click on any exam (e.g., "2017 Mathematics") to start an interactive testing session.
   - Answer the multiple-choice questions, navigate through the test using the grid, and submit when finished to see your score and detailed explanations.
2. **Generate Custom AI Exams:**
   - Click the **"Create Custom Exam"** button.
   - Upload a PDF booklet of your study materials or paste text directly into the generator.
   - The AI will automatically extract, format (including complex Math equations in LaTeX), and structure the content into a fully interactive quiz.
3. **Track Your Progress:**
   - Your completed exam results and scores are automatically saved to your secure profile, allowing you to monitor your improvement over time.
4. **Study Offline:**
   - Simply keep the app open or install it to your device. The robust offline engine ensures you can access all pre-loaded exams and your saved custom quizzes even if you completely lose your internet connection.

## 🛠 Architecture & Security Details

This application is fully production-ready and decoupled for standard hosting (Vercel, Heroku, AWS, etc.):
- **Frontend:** React 19, Vite, Tailwind CSS, Framer Motion, KaTeX
- **Backend & AI:** Node.js, Express, Google GenAI SDK (Gemini Flash & Pro)
- **Database & Caching:** Firebase (Firestore & Auth) securely synced with local IndexedDB
- **Security:** Hardened with `helmet` for strict HTTP headers, parameterized `cors` policies, and `express-rate-limit` to prevent DDoS attacks and API quota abuse. Database reads/writes are mathematically locked down via strict Firebase security rules.

---

**Author & Developer:** Tewodros Abebe  
*Built intuitively using Google AI Studio.*
