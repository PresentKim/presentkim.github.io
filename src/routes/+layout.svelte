<script lang="ts">
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';

  import type { LayoutData } from './$types';

  import '$lib/assets/styles/index.scss';
  import Footer from '$lib/components/Footer.svelte';
  import Header from '$lib/components/Header.svelte';
  import { setDocumentDataset } from '$lib/utils/document-dateset';
  import { themeMount } from '$lib/utils/theme.ts';

  export let data: LayoutData;

  let scrollY: number = 0;
  let scrolled: boolean;

  onMount(() => {
    themeMount();

    /** Load color scheme from device setting */
    setDocumentDataset(
      'theme',
      localStorage.getItem('color-scheme') ||
        (window &&
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light')
    );
  });
</script>

<svelte:window
  on:scroll={() => {
    const lastScrollY = scrollY;
    scrollY = window.scrollY;
    scrolled = scrollY > 72;
    setDocumentDataset('scrolled', String(scrolled));
    setDocumentDataset(
      'scroll',
      scrolled && scrollY - lastScrollY < 0 ? 'up' : 'down'
    );
  }}
  on:mousedown={() => setDocumentDataset('input', 'mouse')}
  on:keydown={() => setDocumentDataset('input', 'keyboard')}
/>

<Header />

{#key data.path}
  <main
    class="blog-container mt-[55px] flex flex-1 flex-col"
    in:fade={{ duration: 500 }}
  >
    <slot />
  </main>
{/key}

<Footer />
