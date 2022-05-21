// 스타일 커스텀 하는법
// https://tailwindcss.com/docs/adding-custom-styles

// https://tailwindcss.com/docs/dark-mode <- 다크모드 적용법
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  fontFamily: {
    // sans: ['Graphik', 'sans-serif'],
    // serif: ['Merriweather', 'serif'],
  },
  plugins: [],
};
