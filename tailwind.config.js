/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#05050A', // very deep navy / near black
        surface: '#0F111A', // slightly lighter for cards
        surfaceBorder: '#1F2937', 
        primary: '#3b82f6', // blue
        secondary: '#8b5cf6', // purple
        accent: '#06b6d4', // cyan
        textMain: '#f8fafc',
        textMuted: '#94a3b8',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-hero': 'linear-gradient(to right, #3b82f6, #8b5cf6)',
      }
    },
  },
  plugins: [],
}
