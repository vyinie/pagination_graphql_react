/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neutral: { 450: "#7d7d7d" },
        negative: "#FA3232",
        positive: "#00E5BC",
      },
    },
    plugins: [],
  },
};
