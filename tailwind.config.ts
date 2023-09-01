import type { Config } from 'tailwindcss';

import colorThemePlugin from './src/lib/utils/tailwindcss/color-theme-plugin';
import scrollVariantsPlugin from './src/lib/utils/tailwindcss/scroll-variants-plugin';
import transitionDurableMixinPlugin from './src/lib/utils/tailwindcss/transition-durable-mixin-plugin';
import variablePlugin from './src/lib/utils/tailwindcss/variable-plugin';

module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./src/**/*.{html,js,svelte,ts}'],
  corePlugins: {
    fontSize: false
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  theme: {
    extend: {
      screens: {
        xs: '475px'
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
    colorThemePlugin,
    scrollVariantsPlugin,
    transitionDurableMixinPlugin,
    variablePlugin,
    require('tailwindcss-fluid-type')({
      settings: {
        fontSizeMin: 1.0, //  1.00rem === 16px
        fontSizeMax: 1.25, // 1.25rem === 20px
        ratioMin: 1.0, // Multiplication Min
        ratioMax: 1.25, // Multiplication Max
        screenMin: 17, //   17rem ===  272px
        screenMax: 120, // 120rem === 1920px
        unit: 'rem',
        prefix: '',
        extendValues: true
      },
      values: {
        xs: [-2, 1.6],
        sm: [-1, 1.6],
        base: [0, 1.6],
        lg: [1, 1.6],
        xl: [2, 1.2],
        '2xl': [3, 1.2],
        '3xl': [4, 1.2],
        '4xl': [5, 1.1],
        '5xl': [6, 1.1],
        '6xl': [7, 1.1],
        '7xl': [8, 1],
        '8xl': [9, 1],
        '9xl': [10, 1]
      }
    })
  ]
} satisfies Config;
