/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        buttonPrimary: '#e2e8f0',
        buttonSecondary: '#EDF7FA',
        textPrimary: '#e2e8f0', // text-slate-200
        textSecondary: '#94a3b8', // text-slate-400
        background: '#0f172a',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}