# Task Tracker

Task Tracker is a simple React + TypeScript application built with Vite. It allows users to manage their tasks efficiently with features like adding, toggling, and deleting tasks. The app also includes a dark mode toggle and theme selection (light, dark, and system).

## Features

- Add new tasks with a keyboard shortcut (Enter key).
- Clear the input field with the Escape key.
- Toggle task completion.
- Delete tasks.
- Dark mode and theme selection (light, dark, system).

## Tech Stack

- **React**: Frontend library for building user interfaces.
- **TypeScript**: For type-safe development.
- **Vite**: Fast build tool for modern web projects.
- **DaisyUI**: TailwindCSS-based UI components.

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/rajulamsal124/task-tracker.git
   ```

2. Navigate to the project directory:

   ```bash
   cd task-tracker
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Building for Production

To create a production build:

```bash
npm run build
```

The build output will be in the `dist/` directory.

## Folder Structure

```
├── public/          # Static assets
├── src/             # Source code
│   ├── components/  # React components
│   ├── styles/      # CSS styles
│   ├── App.tsx      # Main app component
│   ├── main.tsx     # Entry point
├── tailwind.config.ts # TailwindCSS configuration
├── vite.config.ts   # Vite configuration
```

## License

This project is licensed under the MIT License.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```
