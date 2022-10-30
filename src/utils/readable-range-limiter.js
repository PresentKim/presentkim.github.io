/**
 * @param readable: {import('svelte/store').Readable}
 * @param min: number
 * @param max: number
 *
 * @return {import('svelte/store').Subscriber}
 */
export default function readableRangeLimiter(readable, min, max) {
  return value => {
    const dampingMin = min - min * (1 - readable.damping);
    const dampingMax = max + max * readable.damping;

    if (value < dampingMin) {
      readable.set(min, {hard: true});
    } else if (value > dampingMax) {
      readable.set(max, {hard: true});
    }
  };
}