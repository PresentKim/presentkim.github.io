<script>
  import Fa from 'svelte-fa';
  import {faSun, faMoon} from '@fortawesome/free-regular-svg-icons';
  import {onMount} from 'svelte';

  const COLOR_SCHEME_STORE_KEY = 'color-scheme';
  const COLOR_SCHEME_MEDIA_QUERY = '(prefers-color-scheme: dark)';
  const COLOR_SCHEME = {
    DARK: 'dark',
    LIGHT: 'light',
  };

  let windowColorScheme = null;
  export let colorScheme = COLOR_SCHEME.LIGHT;

  function applyColorScheme() {
    if (colorScheme === COLOR_SCHEME.DARK) {
      document.body.classList.remove(COLOR_SCHEME.LIGHT);
      document.body.classList.add(COLOR_SCHEME.DARK);
    } else {
      document.body.classList.remove(COLOR_SCHEME.DARK);
      document.body.classList.add(COLOR_SCHEME.LIGHT);
    }
  }

  const toggleColorScheme = e => {
    //toggle the color scheme
    colorScheme = colorScheme === COLOR_SCHEME.DARK
        ? COLOR_SCHEME.LIGHT
        : COLOR_SCHEME.DARK;

    const stored = localStorage.getItem(COLOR_SCHEME_STORE_KEY);
    if (stored && colorScheme === windowColorScheme) {
      //remove the stored color scheme if it matches the current window color scheme
      localStorage.removeItem(COLOR_SCHEME_STORE_KEY);
    } else {
      //store the color scheme if it doesn't match the current window color scheme
      localStorage.setItem(COLOR_SCHEME_STORE_KEY, colorScheme);
    }

    applyColorScheme();
  };

  onMount(() => {
    if (window && window.matchMedia) {
      const mediaQuery = window.matchMedia(COLOR_SCHEME_MEDIA_QUERY);

      //get the color scheme from window media query
      colorScheme = windowColorScheme = mediaQuery.matches ? COLOR_SCHEME.DARK : COLOR_SCHEME.LIGHT;

      const storedColorScheme = localStorage.getItem(COLOR_SCHEME_STORE_KEY);
      if(storedColorScheme) {
        //get the color scheme from local storage
        colorScheme = storedColorScheme;
      }

      //listen for color scheme changes to the media query
      mediaQuery.addEventListener('change', e => {
        if (windowColorScheme === colorScheme) {
          colorScheme = e.matches ? COLOR_SCHEME.DARK : COLOR_SCHEME.LIGHT;
        }
        windowColorScheme = e.matches ? COLOR_SCHEME.DARK : COLOR_SCHEME.LIGHT;
      });
    }
    applyColorScheme();
  });
</script>


<link rel="stylesheet" title="Default" href="highlight.js/styles/a11y-dark.css">
<style>
    div {
        width: 1.5rem;
        height: 1.5rem;
        padding: .3rem;
        line-height: 1.5rem;
        font-size: 1.5rem;
        border-radius: 25%;
        cursor: pointer;

        transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
        transition-duration: 3s;
    }

    div:hover {
        background-color: var(--border-color);
        transform: scale(1.2);
    }
</style>

<div on:click={toggleColorScheme}>
    <Fa {...$$props} style=" width: 1.5rem;  height: 1.5rem;" icon={colorScheme === COLOR_SCHEME.DARK ? faMoon : faSun}/>
</div>