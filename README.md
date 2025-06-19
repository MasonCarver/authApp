# AuthApp

A simple full-stack authentication app built with Node.js, Express, MongoDB, and JWT. It provides secure user registration, login, and access to protected routes with token-based authentication.

---

## Features

- User registration with password hashing via bcryptjs  
- User login with JWT  
- Protected dashboard route  
- Session persistence using localStorage  
- Basic frontend with vanilla JavaScript and HTML  
- Clean, maintainable folder structure  

---

## Tech Stack

**Frontend**  
- HTML, CSS, JavaScript

**Backend**  
- Node.js  
- Express  
- MongoDB with Mongoose  
- JWT for authentication  
- bcryptjs for password hashing  
- dotenv for environment configuration

---

## Folder Structure

```
authApp/
│
├── public/               # Frontend HTML, CSS, and JS
│   ├── index.html
│   ├── login.html
│   ├── dashboard.html
│   └── script.js
│
├── server/               # Backend
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── protected.js
│   ├── controllers/
│   │   └── authController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   └── server.js
│
├── .env                  # Environment variables (not committed)
├── .gitignore
└── README.md
```

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/authApp.git
cd authApp
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create a `.env` File in the root

```
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

> Never commit your `.env` file to GitHub. It's ignored via `.gitignore`.

### 4. Start the Server

```bash
node server/server.js
```

Open your browser at:

```
http://localhost:5000
```

---

## Test the App

1. Go to `/index.html` to register a new user  
2. Log in at `/login.html`  
3. View protected content at `/dashboard.html`  

---

## Clean-Up Before Production

- Remove all console.log statements  
- Replace hardcoded API URLs with environment-based config  
- Add CSRF and XSS protection if deploying publicly  
- Serve with HTTPS  

---

## License

This project is provided as-is for educational purposes. You may fork and modify it freely. For production use, please follow security best practices.
