import plugin from 'tailwindcss/plugin';

/** TailwindCSS plugin for registers custom variants
 * based on data attributes related to scrolling behavior. */
export default plugin(function ({ addVariant }) {
  addVariant('scrolled', '[data-scrolled="true"] &');
  addVariant('scroll-up', '[data-scroll="up"] &');
});
