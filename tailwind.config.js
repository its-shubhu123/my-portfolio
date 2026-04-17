/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Syne"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        ink: {
          50:  '#f4f3f0',
          100: '#e8e6e1',
          200: '#d0cdc4',
          300: '#b0ac9f',
          400: '#8e8979',
          500: '#726d5e',
          600: '#5c5849',
          700: '#4a4739',
          800: '#3d3b30',
          900: '#2a2921',
          950: '#17160e',
        },
        accent: {
          DEFAULT: '#e8622a',
          light:   '#f0845a',
          dark:    '#c44d1a',
        },
        teal: {
          DEFAULT: '#0d9488',
          light:   '#14b8a6',
        }
      },
      animation: {
        'fade-in':   'fadeIn 0.6s ease forwards',
        'slide-up':  'slideUp 0.6s ease forwards',
        'blink':     'blink 1s step-end infinite',
      },
      keyframes: {
        fadeIn:  { from: { opacity: 0 }, to: { opacity: 1 } },
        slideUp: { from: { opacity: 0, transform: 'translateY(30px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        blink:   { '0%,100%': { opacity: 1 }, '50%': { opacity: 0 } },
      },
    },
  },
  plugins: [],
}