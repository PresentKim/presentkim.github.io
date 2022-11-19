<script>
  import '../global.css';

  import ThemeButton from '../lib/components/ThemeButton.svelte';
  import LogoButton from '../lib/components/LogoButton.svelte';

  export let segment;
</script>

<header>
  <LogoButton {segment} />
  <ThemeButton />
</header>

<main>
  <slot />
</main>
