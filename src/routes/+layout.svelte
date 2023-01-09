<script>
  import '$lib/assets/styles/index.scss';
  import Header from '$lib/components/Header.svelte';
</script>

<div>
  <script>
    var deviceColorScheme =
      window && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    var storedColorScheme = localStorage.getItem('color-scheme');
    var colorScheme = storedColorScheme === null ? deviceColorScheme : storedColorScheme;

    if (colorScheme === 'dark') {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  </script>
  <Header />

  <main class="m-2">
    <slot />
  </main>
</div>
