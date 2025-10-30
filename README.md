# 💊 Prescripto — Full-Stack Doctor Appointment & Prescription Management System

Prescripto is a full-stack web application designed to simplify doctor appointment booking, patient management, and digital prescription handling.  
It provides a seamless experience for both patients and administrators with secure authentication, real-time data, and integrated cloud & payment features.

---

## 🚀 Live Demo

| Component | Link |
|------------|------|
| 🧠 **Backend (API Server)** | [https://prescripto-full-stack-pi4v.onrender.com](https://prescripto-full-stack-pi4v.onrender.com) |
| 💻 **Frontend (User Portal)** | [https://prescripto-full-stack-3urfoocel-ankitahatis-projects.vercel.app](https://prescripto-full-stack-3urfoocel-ankitahatis-projects.vercel.app) |
| 🧑‍⚕️ **Admin Dashboard** | [https://prescripto-full-stack-egao-fpizzo9dz-ankitahatis-projects.vercel.app](https://prescripto-full-stack-egao-fpizzo9dz-ankitahatis-projects.vercel.app) |

---

## 🧩 Features

### 👥 User-Side (Frontend)
- Register/Login with secure authentication (JWT-based)
- Browse doctors by speciality, location, and availability  
- Book and manage appointments in real-time  
- View payment history  
- Responsive UI built with Vite + React + TailwindCSS  

### 🧑‍⚕️ Admin-Side (Dashboard)
- Manage doctors, patients, and appointment records  
- Approve or cancel bookings instantly  
- Secure access with admin credentials  
- Intuitive analytics view for overall hospital activity  

### ⚙️ Backend (Node.js + Express)
- RESTful API architecture  
- MongoDB Atlas for cloud database management  
- Cloudinary integration for image uploads  
- Razorpay / Stripe integration for payment flow  
- Deployed using Render with environment-based configuration  

---

## 🛠️ Tech Stack

| Layer | Technologies |
|-------|---------------|
| **Frontend** | React, Vite, Tailwind CSS, Axios |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB Atlas |
| **Authentication** | JSON Web Tokens (JWT) |
| **Cloud & Storage** | Cloudinary |
| **Payments** | Razorpay / Stripe (Test Integration) |
| **Deployment** | Render (Backend), Vercel (Frontend & Admin) |

---

## 🔒 Environment Variables (Sample)

For local development, create `.env` files inside `backend/`, `frontend/`, and `admin/` folders:

```env
# Backend
PORT=4000
MONGODB_URI=your_mongodb_connection
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_SECRET_KEY=your_secret
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_key
RAZORPAY_KEY_SECRET=your_secret

# Frontend & Admin
VITE_BACKEND_URL=https://prescripto-full-stack-pi4v.onrender.com
VITE_CURRENCY=₹

```

## 🏗️ Project Structure

```env
Prescripto-Full-Stack/
│
├── backend/         # Node.js + Express API
│   ├── config/      # MongoDB, Cloudinary setup
│   ├── controllers/ # API logic
│   ├── models/      # MongoDB schemas
│   └── routes/      # Route definitions
│
├── frontend/        # User interface built with React (Vite)
│   ├── src/
│   └── public/
│
├── admin/           # Admin panel built with React (Vite)
│   ├── src/
│   └── public/
│
└── README.md

```

## 🚀 Deployment Overview

- **Backend** hosted on **Render** — auto builds from GitHub and exposes a public API endpoint.  
- **Frontend & Admin** hosted on **Vercel** — environment variables configured securely for production.  
- **CORS** enabled for cross-origin API communication.

---

## 👩‍💻 Author

**Ankita Hati**  
B.Tech Computer Science & Engineering | KIIT University  
📍 Kolkata, India  

🌐 [GitHub](https://github.com/AnkitaHati)  
🔗 [LinkedIn](https://www.linkedin.com/in/ankita-hati)

---

## 🌱 Future Enhancements

- Doctor availability calendar sync  
- Email & SMS appointment reminders  
- Role-based dashboard analytics  
- Prescription PDF generator for patients  

---

## 🙌 Acknowledgement  

This project was developed as part of a full-stack learning initiative and deployment exercise — showcasing end-to-end development, deployment, and integration skills across the **MERN stack**.  

---