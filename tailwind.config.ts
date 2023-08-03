import type { Config } from 'tailwindcss';

import colorThemePlugin from './src/lib/utils/tailwindcss/color-theme-plugin';
import scrollVariantsPlugin from './src/lib/utils/tailwindcss/scroll-variants-plugin';
import transitionDurableMixinPlugin from './src/lib/utils/tailwindcss/transition-durable-mixin-plugin';
import variablePlugin from './src/lib/utils/tailwindcss/variable-plugin';

module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./src/**/*.{html,js,svelte,ts}'],
  future: {
    hoverOnlyWhenSupported: true
  },
  theme: {
    extend: {
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
    variablePlugin
  ]
} satisfies Config;
