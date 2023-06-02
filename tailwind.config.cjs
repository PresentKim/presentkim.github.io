const plugin = require('tailwindcss/plugin');

function flattenColors(colors) {
  return Object.fromEntries(
    Object.entries(colors).flatMap(([name, value]) => {
      return typeof value === 'string'
        ? [[name, value]]
        : Object.entries(value).map(([k, v]) => [`${name}-${k}`, v]);
    })
  );
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        variable: 'var(--variable-color)',
        neutral: {
          350: '#bababa',
          550: '#636363'
        }
      },
      transitionProperty: {
        shape: 'width, height, margin, padding, transform'
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(1, -0.4, 0, 1.4)'
      }
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          variable: (value) => ({
            '--variable-color': value
          })
        },
        { values: flattenColors(theme('colors')) }
      );
    })
  ]
};
