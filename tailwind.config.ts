import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // eHatod brand orange scale (primary = 500 #FF6700)
        ehatod: {
          50: '#FFF4EC',
          100: '#FFE2CC',
          200: '#FFC9A3',
          300: '#FFB380',
          400: '#FF9248',
          500: '#FF6700', // primary
          600: '#E65C00',
          700: '#BF4D00',
          800: '#993E00',
          900: '#7A3200',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'loading-bar': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(350%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        'loading-bar': 'loading-bar 1.1s ease-in-out infinite',
      },
    },
  },
  plugins: [typography],
} satisfies Config
