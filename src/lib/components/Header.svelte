<script>
  import { page } from '$app/stores';
  import ThemeButton from '$lib/components/header/ThemeButton.svelte';

  let isHome;
  $: isHome = $page.route.id === '/';
</script>

<header>
  <a
    id="logo-btn"
    class="inline-flex mt-3 justify-center transition-logo duration-1000
          {isHome ? 'w-full m-auto' : 'w-11 ml-3'}"
    href="/"
  >
    <svg
      class="rounded-full transition-size duration-1000
             {isHome ? 'w-80 lg:w-96 bg-neutral-200 dark:bg-neutral-800' : 'w-9 lg:w-12'}"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
    >
      <g class="fill-none stroke-round stroke-[6px]">
        <path class="stroke-emerald-900" d="M18,42 18,14 32,10 32,22 18,26 M29,24 33,41" />
        <path class="stroke-emerald-500" d="M17,41 17,13 31,09 31,21 17,25" />
      </g>
    </svg>
  </a>

  <ThemeButton />
</header>
