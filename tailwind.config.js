/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['selector', 'class'],
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ["Source Sans Pro", "Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"]
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      screens: {
        'xs': '480px',
        '3xl': '1920px'
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.9)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)'
          }
        },
        fadeOut: {
          '0%': {
            opacity: '1',
            transform: 'scale(1)'
          },
          '100%': {
            opacity: '0',
            transform: 'scale(0.9)'
          }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
        fadeOut: 'fadeOut 0.3s ease-in-out'
      },
      colors: {
        sand: {
          '50': '#f9f7ef',
          '100': '#f2edd8',
          '200': '#e5dcb0',
          '300': '#d7c88a',
          '400': '#DCCCA3',
          '500': '#b3a377',
          '600': '#8d7e5b',
          '700': '#6a5e45',
          '800': '#4a4232',
          '900': '#2e2a21',
          '950': '#1a1611'
        },
        plum: {
          '50': '#f5eef2',
          '100': '#e6d6e0',
          '200': '#d1b3c4',
          '300': '#b98aa3',
          '400': '#824C71',
          '500': '#6e3f5f',
          '600': '#5b334e',
          '700': '#49283e',
          '800': '#381e2f',
          '900': '#291520',
          '950': '#1a0d14'
        },
        greenblue: {
          '50': '#f0f5eb',
          '100': '#dce8d1',
          '200': '#c4d9b3',
          '300': '#a9c78f',
          '400': '#90AA86',
          '500': '#7b946e',
          '600': '#657d59',
          '700': '#4e6444',
          '800': '#3a4b32',
          '900': '#283322',
          '950': '#141b11'
        },
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)'
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)'
        },
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)'
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)'
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)'
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)'
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)'
        },
        warning: {
          DEFAULT: 'var(--warning)',
          foreground: 'var(--warning-foreground)'
        },
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        chart: {
          '1': 'var(--chart-1)',
          '2': 'var(--chart-2)',
          '3': 'var(--chart-3)',
          '4': 'var(--chart-4)',
          '5': 'var(--chart-5)'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      }
    }
  },
  plugins: [
    require("tailwindcss-animate")
  ],
};