/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        '3xl': '1600px',
        '4xl': '1900px',
      },
      colors: {
        buttonPrimary: '#e2e8f0',
        buttonSecondary: '#EDF7FA',
        textPrimary: '#e2e8f0', // text-slate-200
        textSecondary: '#94a3b8', // text-slate-400
        background: '#0f172a',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
        scroll: {
          // create a loop carrousel that scrolls to the left and then back to the right
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-250px * 15))' },
        },
        'infinite-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'infinite-scroll-reverse': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1.4s ease-in-out infinite',
        scroll: 'scroll 50s linear infinite',
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        'infinite-scroll-reverse': 'infinite-scroll 25s linear infinite',
      },
    },
  },
  plugins: [],
}