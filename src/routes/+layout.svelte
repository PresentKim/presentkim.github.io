<script>
  import '$lib/styles/index.scss';
  import Header from '$lib/components/header/index.svelte';
</script>

<Header />

<main>
  <script>
    var deviceColorScheme =
      window && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    var storedColorScheme = localStorage.getItem('color-scheme');

    document.body.dataset.theme =
      storedColorScheme === null ? deviceColorScheme : storedColorScheme;
  </script>
  <slot />
</main>
