<script>
  import LogoButton from '$lib/components/nav/LogoButton.svelte';
  import Hamburger from '$lib/components/nav/Hamburger.svelte';
  import ThemeButton from '$lib/components/nav/ThemeButton.svelte';
  import { page } from '$app/stores';

  let menuOpened;
  let enoughWidth;
  let screenWidth = 0;

  // for makes logo to long when (screen width > md(768px))
  $: enoughWidth = screenWidth > 768;

  //Close hamburger menu when page redirected
  page.subscribe(() => (menuOpened = false));
</script>

<svelte:window bind:innerWidth={screenWidth} />

<div id="top" class="h-0 mb-20" />
<nav
  class="fixed top-0 z-50 w-full backdrop-blur-sm
         text-neutral-600 dark:text-neutral-300
         bg-white dark:bg-neutral-900 !bg-opacity-90
         border-b border-neutral-200 dark:border-neutral-800"
>
  <div
    class="blog-container flex justify-between px-2 py-3
           [&_*]:transition-shape [&_*]:duration-500 [&_*]:ease-spring"
  >
    <LogoButton shorten={menuOpened && !enoughWidth} />
    <div class="flex gap-2 my-auto">
      <div
        class="flex justify-end mr-2 gap-x-2
               {menuOpened || enoughWidth ? 'w-36' : 'w-0'}
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
