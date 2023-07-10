<script>
  import '$lib/assets/styles/index.scss';
  import Header from '$lib/components/Header.svelte';
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

  <script>
    /** Load color scheme from device setting */
    document.documentElement.classList.add(
      localStorage.getItem('color-scheme') ||
        (window &&
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light')
    );

    /** Calculate real view port and register css variable */
    function debounce(func, timeout) {
      // noinspection ES6ConvertVarToLetConst
      var id, args;
      return function () {
        args = arguments;
        clearTimeout(id);
        id = setTimeout(function () {
          func.apply(this, args);
        }, timeout);
      };
    }

    var updateVh = debounce(function () {
      document.documentElement.style.setProperty(
        '--vh',
        window.innerHeight * 0.01 + 'px'
      );
    }, 100);
    updateVh();
    window.addEventListener('resize', updateVh);
    window.addEventListener('touchend', updateVh);

  </script>

  <!-- TODO
  <meta property="og:image" content="https://example.com/image.jpg">
  <meta property="og:image:alt" content="A description of what is in the image (not a caption)">
  -->
</svelte:head>

<Header />

<main class="blog-container flex-1 flex flex-col items-center justify-center">
  <slot />
</main>

<Footer />
