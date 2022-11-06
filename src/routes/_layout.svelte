<script>
  import '../global.css';

  import ThemeButton from '../components/ThemeButton.svelte';
  import LogoButton from '../components/LogoButton.svelte';

  export let segment;
</script>

<header>
    <LogoButton {segment}/>
    <ThemeButton/>
</header>

<main>
    <slot></slot>
</main>