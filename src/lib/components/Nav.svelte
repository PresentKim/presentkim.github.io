<script>
  import LogoButton from '$lib/components/nav/LogoButton.svelte';
  import Hamburger from '$lib/components/nav/Hamburger.svelte';
  import ThemeButton from '$lib/components/nav/ThemeButton.svelte';
  import { page } from '$app/stores';
  import { onMount } from 'svelte';

  let menuOpened;
  let widthEnough;
  let screenWidth = 0;

  let readProgress = 0.0;

  //For makes logo to long when (screen width > sm(640px))
  $: widthEnough = screenWidth > 640;

  //Close hamburger menu when page redirected
  page.subscribe(() => (menuOpened = false));

  onMount(() => {
    function updateReadProgress() {
      readProgress =
        Math.min(1, window.pageYOffset / (document.body.scrollHeight - window.innerHeight)) * 100;
      requestAnimationFrame(() => updateReadProgress());
    }

    window.requestAnimationFrame(updateReadProgress);
  });
</script>

<svelte:window bind:innerWidth={screenWidth} />

<div id="top" class="h-0 mb-20" />
<nav
  class="fixed top-0 z-50 w-full backdrop-blur-sm
         text-neutral-700 dark:text-neutral-200
         bg-white dark:bg-neutral-900 !bg-opacity-90
         border-b border-neutral-200 dark:border-neutral-800"
>
  <div class="w-screen">
    <div
      class="w-0 h-0.5 bg-neutral-700 dark:bg-neutral-200 rounded"
      style="width: {readProgress}%;"
    />
  </div>
  <div
    class="blog-container flex justify-between px-2 py-3
           [&_*]:transition-shape [&_*]:duration-500 [&_*]:ease-spring"
  >
    <LogoButton shorten={menuOpened && !widthEnough} />
    <div class="flex gap-2 my-auto">
      <div
        class="flex justify-end mr-2 gap-x-2
               {menuOpened || widthEnough ? 'w-36' : 'w-0'}
               md:w-36 overflow-hidden my-auto"
      >
        <a href="/portfolio" class="h-fit">
          <p class="text-xl max-xs:text-base font-bold">Portfolio</p>
        </a>
        <a href="/posts" class="h-fit">
          <p class="text-xl max-xs:text-base font-bold">Posts</p>
        </a>
      </div>
      <Hamburger bind:open={menuOpened} />
      <ThemeButton />
    </div>
  </div>
</nav>
