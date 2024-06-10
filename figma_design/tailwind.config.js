/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1DA1F2",
        secondary: "#14171A",
      },
      backgroundImage: {
        'custom-radial': 'radial-gradient(50% 50% at 50% 50%, rgba(92, 195, 250, 0.28) 0%, rgba(92, 195, 250, 0) 100%)',
      },

    },
  },
  plugins: [],
};
