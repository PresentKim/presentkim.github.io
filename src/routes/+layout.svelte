<script>
  import '$lib/assets/styles/index.scss';
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { title, domain } from '$lib/assets/site-info.json';

  import { onMount } from 'svelte';
  import { themeMount } from '$lib/utils/theme.ts';

  let path = '';
  onMount(() => {
    themeMount();
    path = window.location.pathname;
  });
</script>

<svelte:head>
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="ko_KR" />
  <meta property="og:site_name" content={title} />
  {#if path}
    <meta property="og:url" content="{domain}{path}" />
  {/if}

  <script async src="https://www.googletagmanager.com/gtag/js?id=G-NNGC41131C"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'G-NNGC41131C');
  </script>

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

  <main class="blog-container p-2">
    <slot />
  </main>

  <Footer />
</div>
