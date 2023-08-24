// eslint-disable-next-line no-undef
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        avo: ['SVN-Avo', 'sans-serif'],
      },
    },
    backgroundImage: {
      'down-arrow': "url('@/assets/images/down-arrow.svg')",
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.container': {
          maxWidth: '83rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: theme('spacing.4'),
          paddingRight: theme('spacing.4'),
        },
      })
    }),
  ],
}
