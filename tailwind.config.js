/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      colors: {
        brand: {
          50: '#f5f8fb',
          100: '#eaf0f6',
          200: '#d5e0eb',
          300: '#b2c4d6',
          400: '#879fb9',
          500: '#617b99',
          600: '#405d7c',
          700: '#2b496b',
          800: '#1c3b5c',
          900: '#153054',
          950: '#0b1d35',
        },
        accent: {
          50: '#fbf7ed',
          100: '#f4e9c8',
          200: '#e9d49a',
          300: '#d9bc70',
          400: '#be9543',
          500: '#a77d30',
          600: '#89651f',
          700: '#70521a',
          800: '#5c441b',
          900: '#4b391b',
        },
        secondary: {
          50: '#eff9fb',
          100: '#d7f0f4',
          200: '#b4e1e9',
          300: '#83cbd8',
          400: '#53b1c4',
          500: '#2b9db6',
          600: '#238198',
          700: '#21697b',
          800: '#225665',
          900: '#204957',
        },
        surface: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.06)',
        'glass-lg': '0 16px 48px rgba(0, 0, 0, 0.08)',
        'glow': '0 0 40px rgba(190, 149, 67, 0.2)',
        'glow-lg': '0 0 80px rgba(190, 149, 67, 0.24)',
        'elevated': '0 1px 2px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.06)',
        'elevated-lg': '0 2px 4px rgba(0,0,0,0.04), 0 8px 32px rgba(0,0,0,0.08)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'gradient': 'gradient 8s ease infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'slideDown': 'slideDown 0.2s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};
