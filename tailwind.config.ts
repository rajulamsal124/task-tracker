module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
    "./index.html",
    "./src/**/*.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [import("daisyui")],
  darkMode: "class",
  daisyui: {
    themes: ["light", "dark"],
  },

  variants: {
    extend: {
      backgroundColor: ["active"],
      textColor: ["active"],
      borderColor: ["active"],
      ringColor: ["active"],
    },
  },
  corePlugins: {
    preflight: false,
  },
  safelist: [
    "bg-red-500",
    "bg-green-500",
    "bg-blue-500",
    "text-white",
    "text-black",
  ],
  important: true,
};
