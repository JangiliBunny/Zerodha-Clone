# Zerodha Clone - Full Stack Trading Platform

A full-stack stock trading platform inspired by Zerodha, built using the MERN Stack. The project includes a modern landing page, secure authentication system, trading dashboard, portfolio management, and stock order functionality. The architecture follows a multi-service deployment model with Vercel for frontend applications, Railway for backend services, and MongoDB Atlas for database management.

---

## 🚀 Live Demo

### Landing Page
https://zerodha-clone-zikd.vercel.app

### Trading Dashboard
https://zerodha-clone-xi-gold.vercel.app

### Backend API
https://zerodha-clone-production-cf2a.up.railway.app

---

## 📂 GitHub Repository

https://github.com/JangiliBunny/Zerodha-Clone

---

## ✨ Features

### Authentication & Security

- User Registration
- User Login
- JWT Authentication
- Password Hashing using Bcrypt
- Protected Routes
- Cookie-Based Authentication
- Logout Functionality

### Trading Dashboard

- Watchlist Management
- Buy Stocks
- Orders Tracking
- Holdings Management
- Positions Tracking
- Funds Overview

### Portfolio Analytics

- Portfolio Summary
- Interactive Charts
- Doughnut Charts
- Vertical Graphs


## 🛠️ Tech Stack

### Frontend

- React.js
- React Router DOM
- Axios
- Chart.js
- React ChartJS 2
- Material UI Icons
- CSS3

### Backend

- Node.js
- Express.js
- JWT (jsonwebtoken)
- Bcrypt
- Cookie Parser
- CORS

### Database

- MongoDB Atlas
- Mongoose

### Deployment

- Vercel
- Railway
- MongoDB Atlas

---

## 📁 Project Structure

```bash
Zerodha/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── dashboard/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── Controllers/
│   ├── Models/
│   ├── Routes/
│   ├── Middlewares/
│   ├── util/
│   ├── index.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone Repository

```bash
git clone https://github.com/JangiliBunny/Zerodha-Clone.git

cd Zerodha-Clone
```

---

## 🔧 Backend Setup

```bash
cd backend

npm install
```

Create `.env`

```env
MONGO_URL=your_mongodb_connection_string

TOKEN_KEY=your_secret_key
```

Run Backend

```bash
npm start
```

---

## 🎨 Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Runs on:

```bash
http://localhost:5173
```

---

## 📊 Dashboard Setup

```bash
cd dashboard

npm install

npm run dev
```

Runs on:

```bash
http://localhost:5174
```

---

## 🔌 API Endpoints

### Authentication

```http
POST /signup
POST /login
POST /
POST /logout
```

### Trading APIs

```http
GET /allholdings

GET /allPositions

GET /allOrders

POST /newOrder
```

---

## 🔐 Authentication Flow

1. User Registers
2. Password is Hashed using Bcrypt
3. JWT Token is Generated
4. Secure Cookie is Created
5. Middleware Verifies User
6. Dashboard Access is Granted

---

## 🚀 Deployment Architecture

Frontend (Landing Page)

```text
Vercel
↓
https://zerodha-clone-zikd.vercel.app
```

Dashboard

```text
Vercel
↓
https://zerodha-clone-xi-gold.vercel.app
```

Backend

```text
Railway
↓
https://zerodha-clone-production-cf2a.up.railway.app
```

Database

```text
MongoDB Atlas
```

---

## 🧠 Concepts Implemented

- MERN Stack Development
- JWT Authentication
- REST APIs
- Middleware
- MVC Architecture
- MongoDB Atlas
- Secure Cookies
- CORS Handling
- Deployment

---

## 🔮 Future Improvements

- Transaction History
- Advanced Portfolio Analytics
- User Profile Management
- Dark Mode

---

## 👨‍💻 Author

### Bunny Jangili

GitHub:
https://github.com/JangiliBunny

Project Repository:
https://github.com/JangiliBunny/Zerodha-Clone

---
