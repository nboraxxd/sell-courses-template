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
      colors: {
        primary: '#db3244',
        secondary: '#F5F5F5',
        light: '#F4F7F6',
        dark: '#F4F7F6',
        darkest: '#111111',
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0.0625rem 0 0 rgb(0 0 0 / 40%)',
        lg: '0 8px 16px var(--tw-shadow-color)',
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
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') },
      )
    }),
  ],
}
