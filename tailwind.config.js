/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      colors: {
        primary: '#FF7A00',
        accent: '#F59E0B',
        glow: '#FBBF24',
        graphite: '#111827',
        slate: '#475569',
        background: '#F8FAFC',
        border: '#E5E7EB',
        deep: '#0B1220',
        'soft-pink': '#FFF1F2',
        'soft-purple': '#F5F3FF',
      },
      backgroundImage: {
        'gradient-hero': 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,122,0,0.08) 0%, rgba(245,158,11,0.04) 40%, transparent 70%)',
        'gradient-cta': 'linear-gradient(135deg, #FF7A00 0%, #F59E0B 100%)',
        'gradient-mesh': 'conic-gradient(from 180deg at 50% 50%, rgba(255,122,0,0.04) 0deg, rgba(245,158,11,0.02) 120deg, rgba(251,191,36,0.04) 240deg, rgba(255,122,0,0.04) 360deg)',
        'gradient-glass-border': 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.05) 50%, transparent 100%)',
        'gradient-radial-warm': 'radial-gradient(circle at 30% 20%, rgba(255,122,0,0.06) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(245,158,11,0.04) 0%, transparent 50%)',
      },
      boxShadow: {
        soft: '0 4px 20px rgba(0, 0, 0, 0.03)',
        'glow-primary': '0 0 30px rgba(255, 122, 0, 0.25)',
        'glow-soft': '0 0 20px rgba(255, 122, 0, 0.1)',
        'card-hover': '0 20px 60px -15px rgba(0, 0, 0, 0.08), 0 0 20px rgba(255, 122, 0, 0.08)',
        glass: '0 8px 32px rgba(0, 0, 0, 0.04)',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(-8px)' },
          '50%': { transform: 'translateY(8px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 122, 0, 0.15)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 122, 0, 0.35)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        spotlight: {
          '0%': { backgroundPosition: '0% 0%' },
          '25%': { backgroundPosition: '100% 0%' },
          '50%': { backgroundPosition: '100% 100%' },
          '75%': { backgroundPosition: '0% 100%' },
          '100%': { backgroundPosition: '0% 0%' },
        },
      },
      animation: {
        'gradient-shift': 'gradient-shift 8s ease infinite',
        shimmer: 'shimmer 2.5s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.4s ease-out forwards',
        spotlight: 'spotlight 20s ease infinite',
      },
    },
  },
  plugins: [],
};
