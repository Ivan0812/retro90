/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'pulse-border': {
          '0%': { boxShadow: '0 0 0 0 rgba(234, 179, 8, 0.7)' },
          '70%': { boxShadow: '0 0 0 8px rgba(234, 179, 8, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(234, 179, 8, 0)' },
        },
      },
      animation: {
        'pulse-border': 'pulse-border 1.5s infinite',
      },
    },
  },
  plugins: [],
};