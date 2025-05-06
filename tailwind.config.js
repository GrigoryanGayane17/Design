export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-1410': { 'raw': '(max-width: 1410px)' },
        'max-1060': { 'raw': '(max-width: 1060px)' },
        'max-1519': { 'raw': '(max-width: 1519px)' },
        'max-450': { 'raw': '(max-width: 450px)' },
      },
      animation: {
        fadeInUp: 'fadeInUp 1.5s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

