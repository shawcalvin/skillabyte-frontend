import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/courses/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'primary-gray': {
          100: '#ffffff',
          200: '#d8d9da',
          300: '#b3b4b5',
          400: '#8e9192',
          500: '#6c6f71',
          600: '#4b4f51',
          700: '#2c3033',
          800: '#101518',
          900: '#000000',
        },
        'primary-blue': {
          50: '#ccdaf1',
          100: '#99b5e3',
          200: '#6691d6',
          300: '#4d7ecf',
          400: '#1a59c1',
          500: '#0047ba',
          600: '#003995',
          700: '#003995',
          800: '#002b70',
          900: '#001c4a',
          950: '#000e25',
        },
        'primary-green': {
          50: '#ccdaf1',
          100: '#99b5e3',
          200: '#6691d6',
          300: '#4d7ecf',
          400: '#1a59c1',
          500: '#06D6A0 ',
          600: '#003995',
          700: '#003995',
          800: '#002b70',
          900: '#001c4a',
          950: '#000e25',
        },
        'primary-orange': {
          50: '#ffd1b3',
          100: '#ffb380',
          200: '#ffa366',
          300: '#ff944d',
          400: '#ff751a',
          500: '#ff6600',
          600: '#cc5200',
          700: '#b34700',
          800: '#993d00',
          900: '#662900',
          950: '#331400',
        },
        'primary-brown': {
          100: '#bbb4ae',
          200: '#a69c95',
          300: '#90857c',
          400: '#7b6f64',
          500: '#67594d',
          600: '#584c42',
          700: '#494038',
          800: '#3b342e',
          900: '#2e2824',
        }
      },
    },
    animation: {
      bounce: 'bounce 1.5s ease-out 1',
      shake: 'shake 0.5s cubic-bezier(.36,.07,.19,.97) 2',
      spin: 'spin 1s linear infinite',
    },
    keyframes: {
      bounce: {
        "0%, 40%, 60%, 80%, 100%": { transform: "translateY(0)" },
        "20%": { transform: "translateY(-20px)" },
        "50%": { transform: "translateY(-10px)" },
        "70%": { transform: "translateY(-5px)" },
        "90%": { transform: "translateY(-2.5px)" },
      },
      shake: {
        "0%, 100%": { transform: "translateX(0)" },
        "25%, 75%": { transform: "translateX(-5px)" },
        "50%": { transform: "translateX(5px)" },
      },
      spin: {
        '0%': { transform: 'rotate(0deg)' },
        '25%': { transform: 'rotate(90deg)' },
        '50%': { transform: 'rotate(180deg)' },
        '75%': { transform: 'rotate(270deg)' },
        '100%': { transform: 'rotate(360deg)' },
      },
    },
  },
  plugins: [],
};
export default config;
