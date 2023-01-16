<script>
  import '$lib/assets/styles/index.scss';
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';

  import { onMount } from 'svelte';

  let path = '';
  onMount(() => (path = window.location.pathname));
</script>

<svelte:head>
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="ko_KR" />
  <meta property="og:site_name" content="현재는 개발중" />
  {#if path}
    <meta property="og:url" content="https://present.kim{path}" />
  {/if}

  <!-- TODO
  <meta property="og:image" content="https://example.com/image.jpg">
  <meta property="og:image:alt" content="A description of what is in the image (not a caption)">
  -->
</svelte:head>

<div>
  <script>
    document.documentElement.classList.add(
      localStorage.getItem('color-scheme') ||
        (window && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light')
    );
  </script>
  <Nav />

  <main class="w-full lg:w-[764px] mx-auto p-2">
    <slot />
  </main>

  <Footer />
</div>
