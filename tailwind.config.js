/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8B0000', // Deep maroon
          light: '#B22222',
          dark: '#600000',
        },
        secondary: {
          DEFAULT: '#D4AF37', // Gold
          light: '#F0CF65',
          dark: '#AA8C2C',
        },
        accent: {
          DEFAULT: '#FFF8E1', // Cream
          light: '#FFFDF5',
          dark: '#F0E9D2',
        },
        success: '#2E7D32',
        warning: '#ED6C02',
        error: '#D32F2F',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        sans: ['"Poppins"', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/5848503/pexels-photo-5848503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      },
    },
  },
  plugins: [],
};