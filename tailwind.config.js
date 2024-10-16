/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        zinc: {
          350: "#C8C8D0",
        },
        "pastel-purple": {
          500: "#B991ff",
        },
      },
    },
  },
  plugins: [],
};
