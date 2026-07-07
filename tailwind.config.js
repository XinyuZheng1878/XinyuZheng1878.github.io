/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Newsreader', 'Georgia', 'serif'],
      },
      colors: {
        ink: '#1f2933',
        accent: {
          DEFAULT: '#2f6f6a',
          soft: '#e7f1ef',
          dark: '#245550',
        },
        paper: '#f6f4ef',
      },
    },
  },
  plugins: [],
}
