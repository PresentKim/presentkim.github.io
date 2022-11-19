<script>
  import '$lib/styles/index.scss';
  import ThemeButton from '$lib/components/ThemeButton.svelte';
  import LogoButton from '$lib/components/LogoButton.svelte';
</script>

<header>
  <LogoButton />
  <ThemeButton />
</header>

<main>
  <slot />
</main>
