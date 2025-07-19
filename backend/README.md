# 📱 OAuth-Project Backend

This is a **template backend repository** designed for fast and scalable API development using **TypeScript + Node.js + Express + MongoDB**. It includes a fully functional authentication system, structured routing, and middleware support to help you build and deploy production-ready applications quickly.

## 🛠 Features

- **TypeScript + Node.js + Express** setup  
- **Authentication with JWT & Middleware**  
- **Modular controller structure with API separation**  
- **MongoDB integration-ready**  
- **Pre-configured ESLint & Prettier** for consistent code formatting  
- **Sensible `tsconfig.json` defaults for clean builds**

## 🧩 API Routes

### 🔐 Public Routes (`/api`)

- `POST /api/signup` – Register a new user  
- `POST /api/login` – Authenticate and receive a JWT token  

### 🔒 Protected Routes (`/user`) – Requires Auth Token

- `POST /user/categories` – Create new categories  
- `GET /user/friends` – Fetch the user’s friend list  
- `POST /user/usercats` – Link categories to a user  

> All `/user/*` routes are secured using `authMiddleware`.

## 🗂 Categories Setup (⚠️ Manual Step Required)

Before using category-based features, you **must manually insert all categories** into your database.

- All categories are listed in `data/categories.json`.
- Use a script or write a database seeder to insert them into your MongoDB collection (`categories`).
- Ensure that `name` fields are **unique**, as the database enforces this via a unique constraint.

## 🔑 JWT Secret Generation

To generate a 32-character JWT secret key for `.env`:

```bash
openssl rand -base64 32
````

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/oauth-project-backend.git
cd oauth-project-backend
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Create Environment Variables

Create a `.env` file in the root:

```env
PORT=8000
JWT_SECRET=your_generated_secret
DATABASE_URL=mongodb://localhost:27017/project
```

### 4️⃣ Run the Project

```bash
npx ts-node src/index.ts
```

Or with nodemon (if installed):

```bash
npx nodemon src/index.ts
```

## 📂 Folder Structure

```bash
oauth-project-backend
│
├── src
│   ├── index.ts               # Entry point
│   ├── routes/app-router.ts   # Route configuration
│   ├── controllers/api/       # API Controllers
│   ├── logic/                 # Business logic layer
│   ├── middlewares/           # Middleware (auth, error handling)
│   ├── validation/            # Zod schemas or Joi (if used)
│   ├── config/                # DB connection and config
│   ├── types/                 # TypeScript type definitions
│
├── data/
│   └── categories.json        # List of predefined categories
│
├── .env                       # Environment variables
├── package.json
├── tsconfig.json
├── .eslintrc
├── .prettierrc
├── .gitignore
```

## 📜 License

This project is licensed under the **MIT License**.
