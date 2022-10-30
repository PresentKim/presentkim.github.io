<script>
  import Fa from 'svelte-fa';
  import {faSun, faMoon} from '@fortawesome/free-regular-svg-icons';
  import {onMount} from 'svelte';
  import {spring} from 'svelte/motion';

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

  let windowColorScheme = null;
  let colorScheme = COLOR_SCHEME.LIGHT;
  let size = spring(1.0, {
    stiffness: 0.5,
    damping: 0.1,
  });

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
        width: 1.5rem;
        height: 1.5rem;
        padding: .3rem;
        line-height: 1.5rem;
        font-size: 1.5rem;
        border-radius: 25%;
        cursor: pointer;
    }
</style>

<div on:mousedown={toggleColorScheme}
     on:mouseenter="{() => size.set(1.5)}"
     on:mouseleave="{() => size.set(1.0)}">
    <Fa {...$$props} size="1x" style="transform: scale({$size})"
        icon={COLOR_SCHEME_ICON[colorScheme]}/>
</div>