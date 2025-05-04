# 🧠 AI Code Reviewer

AI-powered code reviewer built using **Node.js**, **Express**, **React**, and **Google's Gemini API**. It analyzes source code, identifies issues, provides improvement suggestions, and even returns a cleaner version of your code.

---

## 🚀 Features

- 🔍 Smart code analysis using Google Gemini
- 🧑‍🏫 Code issues with improvement suggestions
- ✨ Cleaner and more efficient code output
- ⚡ Built with Vite, React (frontend) and Express (backend)
- 🌐 CORS-enabled API for secure communication

---

## 📦 Tech Stack

- Frontend: **React + Vite**
- Backend: **Node.js + Express**
- AI Engine: **Google Generative AI (Gemini API)**
- Styling: **Tailwind CSS / Custom CSS**
- HTTP Client: **Axios**

---

## 📁 Project Structure

Ai-Code-Reviewer/
│
├── backend/
│ ├── src/
│ │ ├── app.js
│ │ ├── routes/
│ │ │ └── ai.routes.js
│ │ └── utils/
│ │ └── generateContent.js
│ └── .env
│
├── frontend/
│ ├── src/
│ │ ├── App.jsx
│ │ └── components/
│ └── index.html
│
├── README.md
└── package.json


---

## 🔧 Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/Ai-Code-Reviewer.git
cd Ai-Code-Reviewer

### 2. Backend Setup
cd backend
npm install

### 3. Create .env
GOOGLE_GEMINI_KEY=your_google_gemini_api_key

Start the backend:
node index.js

### 4. Frontend Setup
cd ../frontend
npm install
npm run dev
Open your browser at: http://localhost:5173

🌍 API Route
POST /ai/code-review

json
Copy
Edit
{
  "code": "your source code here"
}
Response:

json
Copy
Edit
{
  "issues": ["Issue 1", "Issue 2"],
  "suggestions": ["Suggestion 1", "Suggestion 2"],
  "improvedCode": "your improved code here"
}

💡 Prompt Template
"You're a code reviewer with expertise in modern development practices. When I provide code, identify all issues, suggest improvements, and return a cleaner version of the code. Be helpful, concise, and efficient."
