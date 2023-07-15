<script lang="ts">
  import '$lib/assets/styles/index.scss';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';

  import { onMount } from 'svelte';
  import { themeMount } from '$lib/utils/theme.ts';
  import { debounce } from '$lib/utils/utils.ts';

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

    /** Calculate real view port and register css variable */
    const updateVh = debounce(function () {
      document.documentElement.style.setProperty(
        '--vh',
        window.innerHeight * 0.01 + 'px'
      );
    }, 100);
    updateVh();
    window.addEventListener('resize', updateVh);
    window.addEventListener('touchend', updateVh);
  });
</script>

<Header />

<main class="blog-container flex-1 flex flex-col items-center justify-center">
  <slot />
</main>

<Footer />
