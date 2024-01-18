/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4338ca',
        secondary: '#6366f1',
        dark: '#0f172a',
        bright: '#eef2ff',
      },
      backgroundImage: {
        blob: 'url("/blob.svg")',
      }
    },
  },
  plugins: [],
}

