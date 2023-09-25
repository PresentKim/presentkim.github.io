<script lang="ts">
  import { onMount } from 'svelte';

  import type { LayoutData } from './$types';

  import '$lib/assets/styles/index.scss';
  import Contents from '$lib/components/Contents.svelte';
  import Sidebar from '$lib/components/Sidebar.svelte';
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
    scrolled = scrollY > 32;
    setDocumentDataset('scrolled', String(scrolled));
    setDocumentDataset(
      'scroll',
      scrolled && scrollY - lastScrollY < 0 ? 'up' : 'down'
    );
  }}
  on:mousedown={() => setDocumentDataset('input', 'mouse')}
  on:keydown={() => setDocumentDataset('input', 'keyboard')}
/>

<Sidebar />
<Contents path={data}>
  <slot />
</Contents>
