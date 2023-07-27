<script lang="ts">
  import { onMount } from 'svelte';

  import '$lib/assets/styles/index.scss';
  import Footer from '$lib/components/Footer.svelte';
  import Header from '$lib/components/Header.svelte';
  import { themeMount } from '$lib/utils/theme.ts';

  let scrollY: number = 0;
  let scrolled: boolean;

  const oninput = (inputType: string) => {
    document.documentElement.dataset['input'] = inputType;
  };

  const onscroll = () => {
    const lastScrollY = scrollY;
    scrollY = window.scrollY;
    scrolled = scrolled ? scrollY > 0 : scrollY > 75;

    document.documentElement.dataset['scrolled'] = String(scrolled);
    document.documentElement.dataset['scroll'] =
      scrolled && scrollY - lastScrollY < 0 ? 'up' : 'down';
  };

  onMount(() => {
    themeMount();

    /** Load color scheme from device setting */
    document.documentElement.dataset['theme'] =
      localStorage.getItem('color-scheme') ||
      (window &&
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light');
  });
</script>

<svelte:window
  on:scroll={() => onscroll()}
  on:mousedown={() => oninput('mouse')}
  on:keydown={() => oninput('keyboard')}
/>

<Header />

<main class="blog-container mt-[55px] flex flex-1 flex-col">
  <slot />
</main>

<Footer />
