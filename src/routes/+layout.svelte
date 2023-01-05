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
    var colorScheme = storedColorScheme === null ? deviceColorScheme : storedColorScheme;

    if (colorScheme === 'dark') {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    }
  </script>
  <slot />
</main>
