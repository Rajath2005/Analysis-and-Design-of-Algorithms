# Contributing to ADA Hub

First off, thank you for considering contributing to ADA Hub! It's people like you that make open source such a great community to learn, inspire, and create.

This document provides guidelines and steps for contributing to this repository, whether you want to add new algorithms, fix bugs, or improve the Astro website.

## 📝 Code of Conduct

By participating in this project, you are expected to uphold our [Code of Conduct](CODE_OF_CONDUCT.md). Please report unacceptable behavior to arajath5463@gmail.com.

## 🚀 How to Contribute

### 1. Fork & Branch

- Fork the repository on GitHub.
- Clone your fork locally: `git clone https://github.com/YOUR_USERNAME/Analysis-and-Design-of-Algorithms.git`
- Create a new branch for your feature or bugfix: `git checkout -b feature/your-feature-name` or `git checkout -b fix/your-bug-fix`

### 2. Contributing to the C Algorithms (`ADA Programs`)

If you are adding a new algorithm or fixing an existing one:

- Ensure your code is written in standard C.
- Include comments explaining the logic where necessary.
- Compile and run your program to ensure there are no errors:
  ```bash
  gcc your_program.c -o your_program
  ./your_program
  ```
- If you're adding a completely new algorithm, please also consider creating an issue so we can track it, and later we can add it to the website interface!

### 3. Contributing to the Website (`ada-hub`)

The website is built with [Astro](https://astro.build/) and Tailwind CSS.

- Navigate to the frontend directory:
  ```bash
  cd ada-hub
  ```
- Install dependencies:
  ```bash
  npm install
  ```
- Start the development server:
  ```bash
  npm run dev
  ```
- Open `http://localhost:5000` in your browser.
- Make your changes in the `src/` directory. All algorithm data is located in `src/data/algorithms.ts`.

### 4. Commit Changes

Please write clear, concise commit messages. We recommend using conventional commits:
- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for formatting/styling changes
- `refactor:` for code refactoring

### 5. Submit a Pull Request

- Push your branch to your fork: `git push origin your-branch-name`
- Open a Pull Request from your fork to our `main` branch.
- Fill out the PR template provided.

## 💡 Finding Something to Work On

Check out our [Issues](https://github.com/Rajath2005/Analysis-and-Design-of-Algorithms/issues) page. Look for labels like `good first issue` or `help wanted` if you're not sure where to start.

Thank you for contributing!
