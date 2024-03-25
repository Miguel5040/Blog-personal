/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {},
    screens: {
      'xs': '375px',
      'sm': '480px',
      'md': '768px',
      'lg': '992px',
      'xl': '1280px'
    },
  },
  plugins: [],
}
