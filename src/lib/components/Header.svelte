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
        Math.min(
          1,
          window.pageYOffset / (document.body.scrollHeight - window.innerHeight)
        ) * 100;
      requestAnimationFrame(() => updateReadProgress());
    }

    window.requestAnimationFrame(updateReadProgress);
  });
</script>

<svelte:window bind:innerWidth={screenWidth} />

<header class="w-full m-auto">
  <div id="top" class="h-0 mb-14" />
  <nav
    class="fixed top-0 z-50 w-full backdrop-blur-sm select-none
         text-neutral-700 dark:text-neutral-200
         bg-white dark:bg-neutral-900 !bg-opacity-80
         border-b border-neutral-200 dark:border-neutral-800"
  >
    <div
      class="blog-container flex justify-between
           [&_*]:transition-shape [&_*]:duration-500 [&_*]:ease-spring"
    >
      <LogoButton />
      <div class="flex gap-2 my-auto">
        <div
          class="flex justify-end gap-x-0.5 my-auto overflow-hidden
                 {menuOpened || widthEnough ? '' : 'w-0'}"
        >
          {#each [['portfolio', 'Portfolio'], ['posts', 'Posts'], ['tags', 'Tags']] as [pathname, name]}
            <a
              href="/{pathname}"
              class="h-fit m-1"
              tabindex={menuOpened || widthEnough ? 0 : -1}
              data-sveltekit-preload-data="hover"
            >
              <p class="text-base sm:text-xl font-bold">{name}</p>
            </a>
          {/each}
        </div>
        <Hamburger bind:open={menuOpened} tabindex={widthEnough ? -1 : 0} />
        <ThemeButton />
      </div>
    </div>
    <div class="w-full">
      <div
        class="w-0 h-0.5 bg-neutral-700 dark:bg-neutral-200 rounded"
        style="width: {readProgress}%;"
      />
    </div>
  </nav>
</header>
