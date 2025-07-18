# 📱 Full-Stack App (Node.js + React)

This is a **template full-stack application** combining a robust backend built with **TypeScript, Node.js, Express, and MongoDB**, and a responsive frontend using **React**. It is designed for fast prototyping, clean structure, and easy scaling.

---

## 🛠 Features

### 🧩 Backend (API)

* **TypeScript + Node.js + Express**
* **JWT-based Authentication with Middleware**
* **Modular Controller + Route Separation**
* **MongoDB Integration Ready**
* **ESLint & Prettier Configured**
* **Clean `tsconfig.json` for organized builds**

### 🎨 Frontend (React)

* Pages for auth and core functionality developed
* Functional, time-efficient layout
* More reusable components can be extracted in the future for optimization

---

## 📂 Folder Structure

```bash
fullstack-app/
├── backend/
│   ├── src/
│   │   ├── index.ts
│   │   ├── routes/app-router.ts
│   │   ├── controllers/api/
│   │   ├── middlewares/
│   ├── package.json
│   ├── tsconfig.json
│   ├── .eslintrc / .prettierrc
│   └── ...
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
├── package.json           # Root: for running both servers together
└── ...
```

---

## 🔐 API Routes

### Public (`/api`)

* `POST /api/signup` – Register a user
* `POST /api/login` – Login and receive JWT

### Protected (`/user`) – Requires Token

* `POST /user/categories` – Manage categories
* `GET /user/friends` – Get friends list
* `POST /user/usercats` – Link categories to user

> All `/user/*` routes are protected by `authMiddleware`.

---

## 🔑 Generate a Secure JWT Secret

```bash
openssl rand -base64 32
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/fullstack-app.git
cd fullstack-app
```

### 2️⃣ Setup Backend

```bash
cd backend
npm install
tsc --init        # If not already initialized
```

### 3️⃣ Setup Frontend

```bash
cd ../frontend
npm install
```

### 4️⃣ Run Both Together

From the root folder:

#### 📦 Step 1: Install concurrently

```bash
npm install --save-dev concurrently
```

#### 📦 Step 2: Add this to root `package.json`

```json
{
  "scripts": {
    "dev": "concurrently \"npm run server\" \"npm run client\"",
    "server": "cd backend && npx ts-node src/index.ts",
    "client": "cd frontend && npm run dev"
  },
  "devDependencies": {
    "concurrently": "^8.0.1"
  }
}
```

#### ▶️ Start Full Stack App

```bash
npm run dev
```

---

## 📌 Notes

* Backend runs using `ts-node` for dev mode.
* Frontend uses Vite or CRA (`npm run dev` assumed).
* You can later dockerize or deploy each part independently if needed.

---

## 📜 License

This project is licensed under the **MIT License**.
