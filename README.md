# 📦 TradeVerse Fullstack

![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)  
![Express](https://img.shields.io/badge/Express.js-Backend-black?logo=express)  
![React](https://img.shields.io/badge/React-Frontend-blue?logo=react)  
![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen?logo=mongodb)  
![Netlify](https://img.shields.io/badge/Frontend-Netlify-blue?logo=netlify)  
![Render](https://img.shields.io/badge/Backend-Render-purple?logo=render)  

> **TradeVerse** is a fullstack stock trading simulation platform built with **React + Node.js + Express + MongoDB**.  
> The frontend is hosted on **Netlify** and the backend is deployed on **Render**, with **MongoDB Atlas** for database storage.  

---

## 📂 Folder Structure
```
tradeverse_fullstack/
│── backend/          # Node.js + Express server
│   ├── index.js      # Entry point
│   ├── model/        # Mongoose models
│   ├── package.json
│   └── .env
│
│── frontend/         # React + HTML/CSS/JS
│   ├── src/          # React components
│   ├── public/       
│   ├── package.json
│   └── build/        # Production build (after npm run build)
│
│── README.md
```

---

## ⚙️ Tech Stack
- **Frontend:** React, HTML, CSS, JavaScript  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (MongoDB Atlas)  
- **Hosting:**  
  - Frontend → Netlify  
  - Backend → Render  

---

## 🚀 Getting Started

### 🔹 Prerequisites
- [Node.js](https://nodejs.org/) installed (>= 16.x recommended)  
- [MongoDB Atlas](https://www.mongodb.com/atlas) account  

---

### 🔹 Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in `/backend`:
```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
```

Run backend:
```bash
npm start
```

---

### 🔹 Frontend Setup
```bash
cd frontend
npm install
npm start
```

For production build:
```bash
npm run build
```

---

## 🌐 Deployment

### 🔹 Frontend (Netlify)
1. Build frontend:
   ```bash
   cd frontend
   npm run build
   ```
2. Deploy `/build` folder to [Netlify](https://netlify.com/).  

### 🔹 Backend (Render)
1. Push code to GitHub.  
2. Go to [Render](https://render.com/) → New Web Service.  
3. Connect repo, set root directory as `backend/`.  
4. Add environment variables (`MONGO_URI`, `PORT`).  
5. Deploy → get live backend URL.  

### 🔹 Connect Frontend & Backend
- Update frontend API calls to use your Render backend URL instead of `localhost`.  

---

## ✨ Features
- 📊 Simulated trading platform  
- 🛒 Buy/sell orders with real-time updates  
- 📈 Track holdings, positions, and order history  
- 🔐 User authentication & session handling  
- 📡 RESTful APIs with Express  

---

## 📸 Screenshots
> Add your screenshots inside `/screenshots` folder and link them here:  

![Homepage](./screenshots/home.png)  
![Dashboard](./screenshots/dashboard.png)  

---

## 🤝 Contributing
Contributions are welcome!  
1. Fork the project  
2. Create your feature branch (`git checkout -b feature/your-feature`)  
3. Commit your changes (`git commit -m 'Add some feature'`)  
4. Push to the branch (`git push origin feature/your-feature`)  
5. Open a Pull Request  

---

## 📜 License
This project is licensed under the MIT License.  

# Along with love❤️.
# Developed by Shivam vadhiya.