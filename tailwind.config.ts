import type { Config } from 'tailwindcss';

const plugin = require('tailwindcss/plugin');

interface RecursiveKeyValuePair<K extends keyof any = string, V = string> {
  [key: string]: V | RecursiveKeyValuePair<K, V>;
}

function entriesWithoutDefault(obj: RecursiveKeyValuePair) {
  return Object.entries(obj).filter(([key]) => key !== 'DEFAULT');
}

function flattenColors(colors: RecursiveKeyValuePair) {
  return Object.fromEntries(
    entriesWithoutDefault(colors).flatMap(([name, value]) => {
      return typeof value === 'string'
        ? [[name, value]]
        : entriesWithoutDefault(value).map(([k, v]) => [`${name}-${k}`, v]);
    })
  );
}

export default {
  darkMode: ['class', '[data-theme="dark"]'],
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
          variable: (value: string) => ({
            '--variable-color': value
          })
        },
        { values: flattenColors(theme('colors')) }
      );
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
    }),
    plugin(function ({ addVariant }) {
      /** Variants for Header scroll motion */
      addVariant('scrolled', '[data-scrolled="true"] &');
      addVariant('scroll-up', '[data-scroll="up"] &');
    })
  ]
} satisfies Config;
