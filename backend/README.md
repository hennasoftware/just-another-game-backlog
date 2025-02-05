# JAGB Backend

## 📌 Project Overview

Welcome to the backend of **JAGB (Just Another Game Backlog)**! This service handles API requests, user authentication,
and database interactions, ensuring smooth communication between the frontend and Firestore.

## 🚀 Tech Stack

- **Node.js** (Backend runtime)
- **Express.js** (Web framework)
- **Firebase Firestore** (Database)
- **Firebase Authentication** (User management)
- **ESLint & Prettier** (For code quality)

## 📥 Installation & Setup

To get started with the backend, follow these steps:

### 1. Clone the Repository

```sh
git clone https://github.com/your_github_user/just-another-game-backlog.git
cd just-another-game-backlog/backend
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the `backend/` directory and add the required variables following the given example
file `.env.example`.

### 4. Start the Server

```sh
npm start
```

The backend API will be available at `http://localhost:3000/` by default.

## 📂 Project Structure

```
backend/
│── src/
│   ├── controllers/     # Route handlers
│   ├── middleware/      # Express middlewares
│   ├── routes/          # API route definitions
│   ├── services/        # Firestore and Firebase Auth interactions
│   ├── utils/           # Utility functions
│   ├── app.js           # Express app configuration
│   ├── server.js        # Server entry point
│── .eslintrc.json       # ESLint configuration
│── .prettierrc.json     # Prettier configuration
└──  package.json        # Dependencies and scripts
```

## 🚦 Available Scripts

Run these commands inside the `backend/` directory:

- **Start the Development Server:**
  ```sh
  npm run dev
  ```
- **Lint the Code:**
  ```sh
  npm run lint
  ```
- **Format the Code:**
  ```sh
  npm run format
  ```
- **Build for Production:**
  ```sh
  npm run build
  ```

## 🌟 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository and create a feature branch.
2. Follow the project’s **Prettier** and **ESLint** rules.
3. Open a Pull Request and describe your changes.

For detailed guidelines, check our [CONTRIBUTING.md](../docs/CONTRIBUTING.md).

## 📜 License

This project is licensed under the **MIT License**.

---

💡 **Happy Coding!** 🎮🚀
