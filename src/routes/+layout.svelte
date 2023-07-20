<script lang="ts">
  import '$lib/assets/styles/index.scss';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';

  import { onMount } from 'svelte';
  import { themeMount } from '$lib/utils/theme.ts';

  onMount(() => {
    themeMount();

    /** Load color scheme from device setting */
    document.documentElement.classList.add(
      localStorage.getItem('color-scheme') ||
        (window &&
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light')
    );
  });
</script>

<svelte:body
  on:mousedown={() => document.body.classList.add('focus-hide')}
  on:keydown={() => document.body.classList.remove('focus-hide')}
/>

<Header />

<main class="blog-container flex flex-1 flex-col">
  <slot />
</main>

<Footer />
