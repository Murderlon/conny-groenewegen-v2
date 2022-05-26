module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        couture: '#FC281E',
        space: 'rgb(186, 186, 160)',
        materialize: 'rgb(181, 181, 181)',
      },
      fontFamily: { mono: ['IBM Plex Mono', 'monospace'] },
    },
  },
  plugins: [],
}
