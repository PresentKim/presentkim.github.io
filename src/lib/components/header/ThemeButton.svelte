<script>
  import { onMount } from 'svelte';
  import { spring } from 'svelte/motion';

  const COLOR_SCHEME_STORE_KEY = 'color-scheme';
  const COLOR_SCHEME_MEDIA_QUERY = '(prefers-color-scheme: dark)';
  const COLOR_SCHEME = {
    DARK: 'dark',
    LIGHT: 'light'
  };

  const SUN_LAYS = [
    [-21, 0, -13, 0],
    [+21, 0, +13, 0],
    [0, -21, 0, -13],
    [0, +21, 0, +13],
    [-15, -15, -10, -10],
    [+15, +15, +10, +10],
    [-15, +15, -10, +10],
    [+15, -15, +10, -10]
  ];

  function applyColorScheme() {
    const stored = localStorage.getItem(COLOR_SCHEME_STORE_KEY);
    if (stored && colorScheme === windowColorScheme) {
      //remove the stored color scheme if it matches the current window color scheme
      localStorage.removeItem(COLOR_SCHEME_STORE_KEY);
    } else {
      //store the color scheme if it doesn't match the current window color scheme
      localStorage.setItem(COLOR_SCHEME_STORE_KEY, colorScheme);
    }

    document.body.dataset.theme = colorScheme;
  }

  function toggleColorScheme(e) {
    e.preventDefault();

    //toggle the color scheme
    colorScheme = colorScheme === COLOR_SCHEME.DARK ? COLOR_SCHEME.LIGHT : COLOR_SCHEME.DARK;

    applyColorScheme();
  }

  let windowColorScheme = null;
  let colorScheme = null;
  const dr = spring(0.0, {
    stiffness: 0.03,
    damping: 0.08
  });
  $: dr.set(colorScheme === COLOR_SCHEME.DARK ? 1.0 : 0.0);

  onMount(() => {
    if (window && window.matchMedia) {
      const mediaQuery = window.matchMedia(COLOR_SCHEME_MEDIA_QUERY);

      //get the color scheme from window media query
      colorScheme = windowColorScheme = mediaQuery.matches ? COLOR_SCHEME.DARK : COLOR_SCHEME.LIGHT;

      const storedColorScheme = localStorage.getItem(COLOR_SCHEME_STORE_KEY);
      if (storedColorScheme) {
        //get the color scheme from local storage
        colorScheme = storedColorScheme;
      }

      //listen for color scheme changes to the media query
      mediaQuery.addEventListener('change', (e) => {
        if (windowColorScheme === colorScheme) {
          colorScheme = e.matches ? COLOR_SCHEME.DARK : COLOR_SCHEME.LIGHT;
        }
        windowColorScheme = e.matches ? COLOR_SCHEME.DARK : COLOR_SCHEME.LIGHT;
        applyColorScheme();
      });
    }

    dr.set(colorScheme === COLOR_SCHEME.DARK ? 1.0 : 0.0, { hard: true });
    applyColorScheme();
  });
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" on:mousedown={toggleColorScheme}>
  {#if colorScheme}
    <mask id="mask">
      <rect x="0" y="0" width="50" height="50" fill="white" />
      <circle cx={34 + 20 * $dr} cy={16 - 16 * $dr} r={Math.max(0, 16 - 16 * $dr)} fill="black" />
    </mask>
    <g mask="url(#mask)">
      <circle fill="currentColor" cx="25" cy="25" r={Math.max(0, 20 - 12 * $dr)} />
      <g fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round">
        {#each SUN_LAYS as [x1, y1, x2, y2]}
          <line x1={25 + x1 * $dr} y1={25 + y1 * $dr} x2={25 + x2 * $dr} y2={25 + y2 * $dr} />
        {/each}
      </g>
    </g>
  {/if}
</svg>

<style lang="scss">
  svg {
    display: block;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    width: 1.75rem;
    height: 1.75rem;
    padding: 0.5rem;
    line-height: 1.5rem;
    cursor: pointer;

    background-color: var(--bg-block);
    border-radius: 50%;

    opacity: 0.5;
    transition: opacity 0.2s ease-in-out;

    &:hover {
      opacity: 1;
    }
  }
</style>
