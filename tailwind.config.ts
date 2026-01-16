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
        navy: {
          950: '#0a0a1a',
          900: '#0f0f23',
          800: '#1a1a3d',
          700: '#1e1e4f',
          600: '#232366',
          500: '#2d2d8a',
          400: '#4a4ab3',
          300: '#7a7ac9',
          200: '#b3b3e0',
          100: '#dcdcf2',
          50: '#f0f0fa',
        },
        violet: {
          700: '#6b21a8',
          600: '#7c3aed',
          500: '#8b5cf6',
          400: '#a78bfa',
          300: '#c4b5fd',
          200: '#ddd6fe',
          100: '#ede9fe',
          50: '#f5f3ff',
        },
        dark: {
          950: '#030712',
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
          600: '#475569',
        },
        gray: {
          900: '#111827',
          800: '#1f2937',
          700: '#374151',
          600: '#4b5563',
          500: '#6b7280',
          400: '#9ca3af',
          300: '#d1d5db',
          200: '#e5e7eb',
          100: '#f3f4f6',
          50: '#f9fafb',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #0f0f23 0%, #1a1a3d 100%)',
        'gradient-subtle': 'linear-gradient(180deg, #f9fafb 0%, #f3f4f6 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0f0f23 0%, #1a1a3d 100%)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config
