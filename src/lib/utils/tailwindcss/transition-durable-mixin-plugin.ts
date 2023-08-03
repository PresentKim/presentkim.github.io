import plugin from 'tailwindcss/plugin';

import type { RecursiveKeyValuePair } from '../utils';
import { entriesWithoutDefault } from '../utils';

/** TailwindCSS plugin for generates mixin utilities
 * for transition-timing-function and transition-duration. */
export default plugin(function ({ matchUtilities, theme }) {
  const timings = theme('transitionTimingFunction');
  const durations = theme('transitionDuration');
  if (timings === undefined || durations === undefined) {
    return;
  }

  const utilities: {
    [key: string]: (duration: string) => RecursiveKeyValuePair;
  } = {};

  for (const [timingName, timingFunc] of entriesWithoutDefault(timings)) {
    utilities[`ease-${timingName}`] = (duration) => ({
      'transition-timing-function': timingFunc,
      'transition-duration': durations[duration] ?? duration
    });
  }
  matchUtilities(utilities, { values: durations });
});
