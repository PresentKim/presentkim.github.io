const plugin = require('tailwindcss/plugin');

function entriesWithoutDefault(theme) {
  const result = { ...theme };
  if (result.DEFAULT) {
    delete result.DEFAULT;
  }
  return Object.entries(result);
}

function flattenColors(colors) {
  return Object.fromEntries(
    entriesWithoutDefault(colors).flatMap(([name, value]) => {
      return typeof value === 'string'
        ? [[name, value]]
        : entriesWithoutDefault(value).map(([k, v]) => [`${name}-${k}`, v]);
    })
  );
}

function mixin(first, second) {
  const result = {};
  entriesWithoutDefault(first).forEach(([firstKey, firstValue]) => {
    entriesWithoutDefault(second).forEach(([secondKey, secondValue]) => {
      result[`${firstKey}-${secondKey}`] = [firstValue, secondValue];
    });
  });

  return result;
}

const flattenNums = (nums) => Object.fromEntries(nums.map((num) => [num, num]));

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  future: {
    hoverOnlyWhenSupported: true
  },
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
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          variable: (value) => ({
            '--variable-color': value
          })
        },
        { values: flattenColors(theme('colors')) }
      );
    }),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        Object.fromEntries(
          entriesWithoutDefault(theme('transitionTimingFunction')).map(
            ([timingName, timingFunc]) => [
              `ease-${timingName}`,
              (duration) => ({
                'transition-timing-function': timingFunc,
                'transition-duration':
                  theme('transitionDuration')[duration] ?? duration
              })
            ]
          )
        ),
        {
          values: theme('transitionDuration')
        }
      );
    })
  ]
};
