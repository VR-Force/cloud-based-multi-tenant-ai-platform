module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: { 900: '#0b1020', 800: '#10172a', 700: '#162040' },
        blue: { 400: '#4f9bff', 500: '#2563eb' },
        violet: { 400: '#a78bfa' },
      },
      borderRadius: { '2xl': '1rem' },
      boxShadow: { 'glow': '0 0 0 1px rgba(79,155,255,0.15), 0 10px 60px -20px rgba(79,155,255,0.6)' },
    },
  },
  plugins: [],
}
