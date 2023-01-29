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
      fontSize: {
        '3xl': ['1.75rem', '2.00rem'],
        '4xl': ['2.00rem', '2.25rem'],
        '5xl': ['2.25rem', '2.375rem'],
        '6xl': ['2.50rem', '2.75rem'],
        '7xl': ['2.75rem', '1'],
        '8xl': ['3.00rem', '1']
      },
      screens: {
        xs: '342px'
      },
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
