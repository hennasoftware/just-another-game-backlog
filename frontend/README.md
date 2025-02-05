# JAGB Frontend

## 📌 Project Overview

Welcome to the frontend of **JAGB (Just Another Game Backlog)**! This is the user-facing part of our game backlog
application, built using **React + Vite**, styled with **Bootstrap**, and connected to **Firebase Authentication &
Firestore**.

## 🚀 Tech Stack

- **React** (with Vite for fast development)
- **Bootstrap** (for styling and layout)
- **React Router** (for navigation)
- **Firebase** (Firestore for database and Authentication for user management)
- **ESLint & Prettier** (for code quality)

## 📥 Installation & Setup

To get started with the project, follow these steps:

### 1. Clone the Repository

```sh
git clone https://github.com/your_github_org/just-another-game-backlog.git
cd just-another-game-backlog/frontend
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the `frontend/` directory and add the required credentials variables following the given example
file `.env.example`.

### 4. Run the Development Server

```sh
npm run dev
```

The app will be available at `http://localhost:5173/`.

## 📂 Project Structure

```
frontend/
│── public/             # Static assets (favicons, images, etc.)
│── src/
│   ├── assets/         # Images, icons, and global assets
│   ├── components/     # Reusable React components
│   ├── pages/          # App pages (Home, Games, Profile, etc.)
│   ├── routes/         # App routing configuration
│   ├── services/       # Firebase API and external services
│   ├── styles/         # Global styles (CSS/SASS)
│   ├── App.jsx         # Main application component
│   ├── main.jsx        # Entry point
│── .eslintrc.json      # ESLint configuration
│── .prettierrc.json    # Prettier configuration
│── package.json        # Dependencies and scripts
└── vite.config.js      # Vite configuration
```

## 🚦 Available Scripts

Run these commands inside the `frontend/` directory:

- **Start the Dev Server:**
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
