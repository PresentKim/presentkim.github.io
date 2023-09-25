<script lang="ts">
  import type { LayoutData } from './$types';

  import '$lib/assets/styles/index.scss';
  import Contents from '$lib/components/Contents.svelte';
  import Sidebar from '$lib/components/Sidebar.svelte';
  import { setDocumentDataset } from '$lib/utils/document-dateset';

  export let data: LayoutData;

  let scrollY: number = 0;
  let scrolled: boolean;
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
