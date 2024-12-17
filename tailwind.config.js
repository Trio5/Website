module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-orange-light': 'rgba(255, 165, 0, 0.2)', // Light orange background
      },
      scale: {
        '135': '1.35', // Custom scale for 35% increase
      },
    },
  },
  plugins: [],
};
