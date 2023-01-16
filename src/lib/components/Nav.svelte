<script>
  import LogoButton from '$lib/components/nav/LogoButton.svelte';
  import ThemeButton from '$lib/components/nav/ThemeButton.svelte';
</script>

<div id="top" class="h-0 mb-20" />
<nav
  class="w-full z-50 h-16 fixed top-0 backdrop-blur-sm bg-white dark:bg-neutral-900 bg-opacity-90 dark:bg-opacity-90 border-b border-neutral-200 dark:border-neutral-800"
>
  <div class="flex justify-between mx-auto px-4 py-3 w-full lg:w-[764px]">
    <LogoButton />

    <ThemeButton />
  </div>
</nav>
