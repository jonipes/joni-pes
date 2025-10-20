module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'jp-purple': '#3b0b4f',
        'jp-purple-2': '#5b1f6a'
      },
      boxShadow: {
        'jp-glow': '0 6px 18px rgba(139, 92, 246, 0.28)',
      }
    },
  },
  plugins: [],
}
