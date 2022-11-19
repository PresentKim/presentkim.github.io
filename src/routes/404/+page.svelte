<script>
  import { page } from '$app/stores';
  import { onMount } from 'svelte';

  let path = $page.url.pathname;
  onMount(() => {
    path = window.location.pathname;
  });
</script>

<h1>Error: 404</h1>
<h3>Page not found: {path}</h3>

<h2><a href="/">Go home</a></h2>
