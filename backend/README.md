# 📱 DENAURLEN Backend

This is a **template backend repository** designed for fast and scalable API development using **TypeScript + Node.js + Express + MongoDB**. It includes a fully functional authentication system, structured routing, and middleware support to help you build and deploy production-ready applications quickly.

## 🛠 Features

- **TypeScript + Node.js + Express** setup
- **Authentication with JWT & Middleware**
- **Modular controller structure with API separation**
- **MongoDB integration-ready**
- **Pre-configured ESLint & Prettier** for code formatting
- **Sensible `tsconfig.json` defaults for clean builds**

---

## 🧩 API Routes

### 🔐 **Public Routes** (`/api`)

- `POST /api/signup` – Register a new user via `signupController`
- `POST /api/login` – Authenticate and get token via `loginController`

### 🔒 **Protected Routes** (`/user`) – Requires Auth Token

- `POST /user/categories` – Manage categories via `categoriesController`
- `GET /user/friends` – Get user’s friends list via `userController`
- `POST /user/usercats` – Link categories to a user via `userCategoriesController`

> All `/user/*` routes are secured with `authMiddleware`.

---

### 🔑 Generate a 32-Character JWT Secret

Run the following command to generate a secure token for JWT:

```bash
openssl rand -base64 32
```

---

### 🚀 Getting Started

#### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/denaurlen-backend.git
cd denaurlen-backend
```

#### 2️⃣ Initialize TypeScript (if not already initialized)

```bash
tsc --init
```

#### 3️⃣ Install Dependencies

```bash
npm install
```

#### 4️⃣ Run the Project

```bash
npx ts-node src/index.ts
```

---

### 📂 Folder Structure

```bash
denaurlen-backend
│
├── src
│   ├── index.ts                 # Entry point
│   ├── routes/app-router.ts     # Route configuration
│   ├── controllers/api/         # API Controllers
│   ├── middlewares/             # Auth & other middleware
│
├── package.json
├── tsconfig.json
├── .eslintrc / .prettierrc
├── .gitignore
```

---

### 📜 License

This project is licensed under the **MIT License**.
