import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff5f0',
          100: '#ffe8df',
          200: '#ffd4c2',
          300: '#ffb5a0',
          400: '#ff9d88',
          500: '#ff8070',
          600: '#f5704e',
          700: '#e05c40',
          800: '#c24e37',
          900: '#a04432',
          950: '#5c241f',
        },
        secondary: {
          50: '#f3f8f7',
          100: '#e0f0ee',
          200: '#c5deda',
          300: '#9fc5bf',
          400: '#74aaa0',
          500: '#5a9687',
          600: '#448271',
          700: '#38685c',
          800: '#2f544b',
          900: '#2a453d',
          950: '#162925',
        },
        accent: {
          50: '#fef9f3',
          100: '#fdf0e3',
          200: '#fde0c7',
          300: '#fbc9a5',
          400: '#f9ae77',
          500: '#f79454',
          600: '#e97d2a',
          700: '#c46321',
          800: '#9d4f1f',
          900: '#7d401d',
          950: '#44200d',
        },
        neutral: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      spacing: {
        '4.5': '1.125rem',
        '5.5': '1.375rem',
        '14.5': '3.625rem',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        'soft': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'warm': '0 4px 12px rgba(255, 128, 112, 0.15)',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'bounce-soft': 'bounceSoft 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
