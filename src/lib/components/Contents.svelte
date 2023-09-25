<script lang="ts">
  import clsx from 'clsx';
  import { fly } from 'svelte/transition';

  import Footer from '$lib/components/ContentsFooter.svelte';
  import Header from '$lib/components/ContentsHeader.svelte';

  export let path: string;
</script>

<div
  id="contents-container"
  class={clsx(
    'translate-x-0 sidebar:translate-x-64 lg:translate-x-64',
    'w-full overflow-x-hidden sidebar:w-[calc(100vw-16rem)] lg:w-[calc(100vw-16rem)]',
    'transition-[transform,width] ease-in-out-500'
  )}
>
  <div class="w-screen">
    <Header />
    {#key path}
      <main
        class="blog-container"
        in:fly={{ y: 50, duration: 200, delay: 200 }}
        out:fly={{ y: -50, duration: 200 }}
      >
        <slot />
      </main>
    {/key}
    <Footer />
  </div>
</div>
