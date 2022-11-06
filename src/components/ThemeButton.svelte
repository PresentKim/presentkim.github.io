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
  const COLOR_SCHEME_ICON = {
    [COLOR_SCHEME.DARK]: faSun,
    [COLOR_SCHEME.LIGHT]: faMoon,
  };

  function applyColorScheme() {
    const stored = localStorage.getItem(COLOR_SCHEME_STORE_KEY);
    if (stored && colorScheme === windowColorScheme) {
      //remove the stored color scheme if it matches the current window color scheme
      localStorage.removeItem(COLOR_SCHEME_STORE_KEY);
    } else {
      //store the color scheme if it doesn't match the current window color scheme
      localStorage.setItem(COLOR_SCHEME_STORE_KEY, colorScheme);
    }

    if (colorScheme === COLOR_SCHEME.DARK) {
      document.body.classList.remove(COLOR_SCHEME.LIGHT);
      document.body.classList.add(COLOR_SCHEME.DARK);
    } else {
      document.body.classList.remove(COLOR_SCHEME.DARK);
      document.body.classList.add(COLOR_SCHEME.LIGHT);
    }
  }

  function toggleColorScheme(e) {
    e.preventDefault();

    //toggle the color scheme
    colorScheme = colorScheme === COLOR_SCHEME.DARK
        ? COLOR_SCHEME.LIGHT
        : COLOR_SCHEME.DARK;

    applyColorScheme();
  }

  let windowColorScheme = null;
  let colorScheme = COLOR_SCHEME.LIGHT;

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

<style>
    div {
        display: block;
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        width: 1.5rem;
        height: 1.5rem;
        padding: .5rem .5rem .6rem .5rem;
        line-height: 1.5rem;
        font-size: 1.5rem;
        cursor: pointer;

        background-color: var(--bg-block1);
        border-radius: 50%;

        opacity: .5;
        transition: opacity .2s ease-in-out;
    }

    div:hover {
        opacity: 1;
    }
</style>

<div on:mousedown={toggleColorScheme}>
    <Fa {...$$props} icon={COLOR_SCHEME_ICON[colorScheme]}/>
</div>