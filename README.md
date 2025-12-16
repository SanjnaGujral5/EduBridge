# 🎓 EduBridge – Full Stack Learning Platform

EduBridge is a full-stack MERN-based learning platform where students can explore and enroll in courses, and educators can manage and publish their content. The project is built with a **separate frontend and backend architecture**, following real-world production practices.

---

## 🚀 Live Demo

- **Frontend (Vercel)**  
  👉 https://edu-bridge-tawny.vercel.app/

- **Backend API (Vercel)**  
  👉 https://edu-bridge-backend-ashen.vercel.app/

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- React Router
- Clerk Authentication
- Tailwind CSS
- Vercel (Deployment)

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- Clerk Webhooks
- Multer (File Uploads)
- Cloudinary (Media Storage)
- Vercel (Deployment)

---

## 🔑 Key Features

### 👨‍🎓 Student
- Browse available courses
- View course details
- Enroll in courses
- Watch course content
- Authentication using Clerk

### 👩‍🏫 Educator
- Create and manage courses
- Upload course content
- View enrolled students
- Educator dashboard

### 🔐 Authentication
- Secure authentication using **Clerk**
- Role-based access (Student / Educator)

---

## 🌐 Project Architecture

- Frontend and Backend are deployed **separately**
- Frontend communicates with Backend using REST APIs
- Environment variables are used for secure configuration

```text
Frontend (Vercel)
        |
        |  API Requests
        ↓
Backend (Vercel) → MongoDB
