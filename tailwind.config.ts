/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'party-gold': '#FFD700',
        'party-deep-blue': '#0F172A',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out',
        'snowfall': 'snowfall 10s infinite linear',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        snowfall: {
          '0%': { transform: 'translateY(-10vh) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(100vh) rotate(360deg)', opacity: '0.1' },
        }
      }
    },
  },
  plugins: [],
}
