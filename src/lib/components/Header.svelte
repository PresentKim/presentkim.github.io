<script>
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import { spring } from 'svelte/motion';

  let isHome;
  $: isHome = $page.route.id === '/';

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
    const storedColorScheme = localStorage.getItem(COLOR_SCHEME_STORE_KEY);
    if (storedColorScheme && colorScheme === deviceColorScheme) {
      //remove the stored color scheme if it matches the current window color scheme
      localStorage.removeItem(COLOR_SCHEME_STORE_KEY);
    } else {
      //store the color scheme if it doesn't match the current window color scheme
      localStorage.setItem(COLOR_SCHEME_STORE_KEY, colorScheme);
    }

    const classList = document.documentElement.classList;
    if (colorScheme === COLOR_SCHEME.DARK) {
      classList.remove('light');
      classList.add('dark');
    } else {
      classList.remove('dark');
      classList.add('light');
    }
  }

  function toggleColorScheme(e) {
    e.preventDefault();

    //toggle the color scheme
    colorScheme = colorScheme === COLOR_SCHEME.DARK ? COLOR_SCHEME.LIGHT : COLOR_SCHEME.DARK;

    applyColorScheme();
  }

  let deviceColorScheme = null;
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
      colorScheme = deviceColorScheme = mediaQuery.matches ? COLOR_SCHEME.DARK : COLOR_SCHEME.LIGHT;

      const storedColorScheme = localStorage.getItem(COLOR_SCHEME_STORE_KEY);
      if (storedColorScheme) {
        //get the color scheme from local storage
        colorScheme = storedColorScheme;
      }

      //listen for color scheme changes to the media query
      mediaQuery.addEventListener('change', (e) => {
        if (deviceColorScheme === colorScheme) {
          colorScheme = e.matches ? COLOR_SCHEME.DARK : COLOR_SCHEME.LIGHT;
        }
        deviceColorScheme = e.matches ? COLOR_SCHEME.DARK : COLOR_SCHEME.LIGHT;
        applyColorScheme();
      });
    }

    dr.set(colorScheme === COLOR_SCHEME.DARK ? 1.0 : 0.0, { hard: true });
    applyColorScheme();
  });
</script>

<header class="flex transition duration-1000 p-3">
  <a
    id="logo-btn"
    class="inline-flex mx-auto justify-center {isHome ? 'w-11/12' : 'w-11'}"
    href="/"
  >
    <svg
      class="rounded-full transition-size duration-1000
     {isHome ? 'w-80 lg:w-96 bg-neutral-200 dark:bg-neutral-800' : 'w-9 lg:w-12'}"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
    >
      <g class="fill-none stroke-round stroke-[6px]">
        <path class="stroke-emerald-900" d="M18,42 18,14 32,10 32,22 18,26 M29,24 33,41" />
        <path class="stroke-emerald-500" d="M17,41 17,13 31,09 31,21 17,25" />
      </g>
    </svg>
  </a>

  <svg
    id="theme-toggle-btn"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    class="p-0 m-0 w-7 absolute top-3 right-3 opacity-50 hover:opacity-100 transition-opacity"
    on:mousedown={toggleColorScheme}
  >
    {#if colorScheme}
      <mask id="mask">
        <rect x="0" y="0" width="50" height="50" fill="white" />
        <circle cx={34 + 20 * $dr} cy={16 - 16 * $dr} r={Math.max(0, 16 - 16 * $dr)} fill="black" />
      </mask>
      <g mask="url(#mask)">
        <circle fill="currentColor" cx="25" cy="25" r={Math.max(0, 20 - 12 * $dr)} />
        <g class="fill-none stroke-current stroke-round stroke-[5px]">
          {#each SUN_LAYS as [x1, y1, x2, y2]}
            <line x1={25 + x1 * $dr} y1={25 + y1 * $dr} x2={25 + x2 * $dr} y2={25 + y2 * $dr} />
          {/each}
        </g>
      </g>
    {/if}
  </svg>
</header>
