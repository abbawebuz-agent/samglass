/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // SamGlass brand — Tilda'dan ko'chirilgan
        brand: {
          DEFAULT: '#58ccdc', // asosiy turkuaz
          dark: '#21b6ca',
          light: '#d4f0f4',
          deep: '#0a8fa3',
        },
        ink: {
          DEFAULT: '#393939',
          900: '#111111',
          700: '#2d2c2c',
          500: '#8e8e8e',
          400: '#878787',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'system-ui', 'Arial', 'sans-serif'],
        heading: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: { DEFAULT: '1rem', lg: '2rem' },
        screens: { '2xl': '1280px' },
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(17,17,17,0.18)',
        glass: '0 8px 32px rgba(88,204,220,0.18)',
      },
    },
  },
  plugins: [],
}
