<script>
  import '$lib/assets/styles/index.scss';
  import Nav from '$lib/components/Nav.svelte';
</script>

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

  <main class="m-2">
    <slot />
  </main>
</div>
