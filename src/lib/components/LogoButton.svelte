<script>
  import { page } from '$app/stores';
  import icLogo from '$lib/assets/ic_logo.svg';

  let isHome;
  $: isHome = $page.route.id === '/';
</script>

<a href="/" class:isHome>
  <img src={icLogo} alt="logo svg" />
</a>

<style lang="scss">
  a {
    display: inline-flex;
    justify-content: center;
    padding: 0.5rem;
    width: 36px;
    transition: width 1s ease-in-out;

    img {
      transition: all 1s ease-in-out;
      border-radius: 50%;

      width: 36px;
      height: 36px;
    }

    &.isHome {
      transition: all 1s ease-in-out;
      width: calc(100% - 1rem);

      img {
        width: 292px;
        height: 292px;
        background-color: var(--border-color);

        @media (max-width: 600px) {
          width: 228px;
          height: 228px;
        }
      }
    }
  }
</style>
