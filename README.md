# 🔐 AuthApp

A simple full-stack authentication app built with **Node.js**, **Express**, **MongoDB**, and **JWT**. It provides secure user registration, login, and access to protected routes with token-based authentication.

---

## 🚀 Features

- ✅ User Registration (with password hashing via `bcryptjs`)
- 🔐 User Login with JWT
- 🛡️ Protected Dashboard Route
- 🧠 Session persistence using `localStorage`
- 🧪 Simple frontend using vanilla JavaScript + HTML
- 📁 Clean folder structure for maintainability

---

## 🧱 Tech Stack

**Frontend**
- HTML, CSS, JavaScript

**Backend**
- Node.js
- Express
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing
- dotenv for environment config

---

## 📁 Folder Structure

authApp/
│
├── public/ # Frontend HTML, CSS, and JS
│ ├── index.html
│ ├── login.html
│ ├── dashboard.html
│ └── script.js
│
├── server/ # Backend
│ ├── models/
│ │ └── User.js
│ ├── routes/
│ │ ├── auth.js
│ │ └── protected.js
│ ├── controllers/
│ │ └── authController.js
│ ├── middleware/
│ │ └── authMiddleware.js
│ └── server.js
│
├── .env # Your environment variables (not included in Git)
├── .gitignore
└── README.md


---

## 📦 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/authApp.git
cd authApp

npm install

MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000

⚠️ Never commit your .env file to GitHub. It's listed in .gitignore.

node server/server.js

http://localhost:5000

🧪 Test Credentials
To test:

Register a user at /index.html

Then log in at /login.html

View protected dashboard at /dashboard.html

🧼 Clean-Up Before Production
✅ Remove all console.log() statements
✅ Switch from hardcoded localhost API URL to relative paths or environment config
✅ Add CSRF/XSS protection as needed for advanced use

📌 Notes
This is a basic educational template and does not include features like password reset, email verification, or 2FA.

For production use, ensure you use HTTPS and deploy to secure hosting.

👨‍💻 Author
Created by Mason Carver – feel free to fork, improve, and contribute!


---

Let me know if you want:
- A personalized author name/link
- Deployment instructions (e.g. Render/Vercel)
- Screenshots or logo
- GitHub Pages setup for the frontend

Ready to go when you are!

