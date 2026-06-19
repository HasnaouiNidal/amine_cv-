/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#FAF8F5',       // Warm White
          secondary: '#F4F0E6',     // Sand Accent
        },
        accent: {
          purple1: '#0D9488',       // Map legacy purple1 to Digital Teal
          purple2: '#0F1E36',       // Map legacy purple2 to Deep Navy
          navy: '#0F1E36',          // Deep Navy
          teal: '#0D9488',          // Digital Teal
          gold: '#D4AF37',          // Moroccan Gold
        },
        text: {
          body: '#1C1C1C',          // Deep Charcoal
          muted: '#4A4F59',         // Muted Charcoal
          white: '#ffffff',
        },
        glass: {
          bg: 'rgba(244, 240, 230, 0.6)',  // Sand Gray semi-transparent
          border: 'rgba(28, 28, 28, 0.08)', // Thin Charcoal border
        },
        panel: {
          dark: '#0F1219',          // OS Dark
        },
        nidam: {
          bgPrimary: '#FAF8F5',
          bgSecondary: '#F4F0E6',
          textPrimary: '#1C1C1C',
          textMuted: '#4A4F59',
          accentNavy: '#0F1E36',
          accentTeal: '#0D9488',
          accentGold: '#D4AF37',
          panelDark: '#0F1219',
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'serif-nidam': ['"Playfair Display"', 'Georgia', 'serif'],
        'sans-nidam': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'hero': ['64px', { lineHeight: '72px', fontWeight: '700' }],
        'footer-title': ['56px', { lineHeight: '64px', fontWeight: '700' }],
        'section': ['40px', { lineHeight: '48px', fontWeight: '700' }],
        'card': ['28px', { lineHeight: '34px', fontWeight: '700' }],
        'small-heading': ['24px', { lineHeight: '32px', fontWeight: '700' }],
        'body-lg': ['18px', { lineHeight: '28px' }],
        'label': ['20px', { lineHeight: '28px', letterSpacing: '1.6px' }],
      },
      maxWidth: {
        container: '1140px',
      },
      borderRadius: {
        pill: '50px',
        card: '24px',
        project: '32px',
      },
      backdropBlur: {
        glass: '12px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'marquee-slow': 'marquee 45s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.7s ease-out forwards',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
