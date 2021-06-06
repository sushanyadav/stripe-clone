module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/components/*.{js,ts,jsx,tsx}",
    "./src/components/**/**/*.{js,ts,jsx,tsx}",
    "./src/utils/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        "3xl": "2400px",
      },
      colors: {
        "light-gray": "#f6f9fc",
        dark: "#0a2540",
        primary: "#635bff",
        accent: "#00d4ff",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
