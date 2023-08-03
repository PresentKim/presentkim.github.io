import plugin from 'tailwindcss/plugin';

import type { RecursiveKeyValuePair } from '../utils';
import { entriesWithoutDefault } from '../utils';

function flattenColors(colors: RecursiveKeyValuePair) {
  return Object.fromEntries(
    entriesWithoutDefault(colors).flatMap(([name, value]) => {
      return typeof value === 'string'
        ? [[name, value]]
        : entriesWithoutDefault(value).map(([k, v]) => [`${name}-${k}`, v]);
    })
  );
}

/** TailwindCSS plugin for generates color variable utilities. */
export default plugin(
  function ({ addBase, matchUtilities, theme }) {
    // Add base style for set default --variable-color value
    addBase({ ':root': { '--variable-color': 'currentColor' } });

    // Generate color variable utilities based on the theme's 'colors'.
    matchUtilities(
      {
        variable: (value) => ({
          '--variable-color': value
        })
      },
      { values: flattenColors(theme('colors')) }
    );
  },
  // Add 'variable' key to 'theme' with 'var(--variable-color)' as value.
  {
    theme: {
      extend: {
        colors: {
          variable: 'var(--variable-color)'
        }
      }
    }
  }
);
