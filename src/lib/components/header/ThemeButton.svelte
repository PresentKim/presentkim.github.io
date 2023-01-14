<script>
  import { onMount } from 'svelte';

  const LOCAL_STORAGE_KEY = 'color-scheme';

  function applyColorScheme() {
    const storedColorScheme = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedColorScheme && colorScheme === deviceColorScheme) {
      //remove the stored color scheme if it matches the current window color scheme
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    } else {
      //store the color scheme if it doesn't match the current window color scheme
      localStorage.setItem(LOCAL_STORAGE_KEY, colorScheme);
    }

    const classList = document.documentElement.classList;
    if (colorScheme === 'dark') {
      classList.remove('light');
      classList.add('dark');
    } else {
      classList.remove('dark');
      classList.add('light');
    }
  }

  function toggleColorScheme(e) {
    //toggle the color scheme
    colorScheme = colorScheme === 'dark' ? 'light' : 'dark';

    applyColorScheme();
  }

  let deviceColorScheme = null;
  let colorScheme = null;

  onMount(() => {
    if (window && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

      //get the color scheme from window media query
      colorScheme = deviceColorScheme = mediaQuery.matches ? 'dark' : 'light';

      const storedColorScheme = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (storedColorScheme) {
        //get the color scheme from local storage
        colorScheme = storedColorScheme;
      }

      //listen for color scheme changes to the media query
      mediaQuery.addEventListener('change', (e) => {
        const newColorScheme = e.matches ? 'dark' : 'light';
        if (deviceColorScheme === colorScheme) {
          colorScheme = newColorScheme;
        }
        deviceColorScheme = newColorScheme;
        applyColorScheme();
      });
    }

    applyColorScheme();
  });
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 50 50"
  class="p-0 m-0 w-7 absolute top-3 right-3 opacity-50 hover:opacity-100 transition-opacity select-none"
  on:mousedown={toggleColorScheme}
>
  <mask id="moonMask">
    <rect class="fill-white" width="50" height="50" />
    <circle class="fill-black origin-top-right scale-0 dark:scale-100" cx="34" cy="14" r="16" />
  </mask>

  <g mask="url(#moonMask)">
    <circle class="fill-current scale-50 dark:scale-125" cx="25" cy="25" r="16" />

    <g class="fill-none stroke-current stroke-round stroke-[5px] scale-100 dark:scale-0">
      <line x1="4" y1="25" x2="12" y2="25" />
      <line x1="46" y1="25" x2="38" y2="25" />
      <line x1="25" y1="4" x2="25" y2="12" />
      <line x1="25" y1="46" x2="25" y2="38" />
      <line x1="10" y1="10" x2="15" y2="15" />
      <line x1="40" y1="40" x2="35" y2="35" />
      <line x1="10" y1="40" x2="15" y2="35" />
      <line x1="40" y1="10" x2="35" y2="15" />
    </g>
  </g>
</svg>

<style>
  svg * {
    @apply origin-center transition-transform duration-500 ease-spring;
  }
</style>
