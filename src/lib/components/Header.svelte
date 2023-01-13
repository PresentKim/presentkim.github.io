<script>
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import ThemeButton from '$lib/components/header/ThemeButton.svelte';

  let isHome;
  $: isHome = $page.route.id === '/';

  const COLOR_SCHEME_STORE_KEY = 'color-scheme';
  const COLOR_SCHEME_MEDIA_QUERY = '(prefers-color-scheme: dark)';
  const COLOR_SCHEME = {
    DARK: 'dark',
    LIGHT: 'light'
  };

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

    applyColorScheme();
  });
</script>

<header>
  <a
    id="logo-btn"
    class="inline-flex mt-3 justify-center transition-logo duration-1000
          {isHome ? 'w-full m-auto' : 'w-11 ml-3'}"
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

  <div
    class="p-0 m-0 w-7 absolute top-3 right-3 opacity-50 hover:opacity-100 transition-opacity"
    on:mousedown={toggleColorScheme}
  >
    <ThemeButton />
  </div>
</header>
