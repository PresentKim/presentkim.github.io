<script>
  import LogoButton from '$lib/components/nav/LogoButton.svelte';
  import Hamburger from '$lib/components/nav/Hamburger.svelte';
  import ThemeButton from '$lib/components/nav/ThemeButton.svelte';
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import clsx from 'clsx';

  let menuOpened;
  let widthEnough;
  let screenWidth = 0;

  let readProgress = 0.0;

  const navLinks = [
    ['portfolio', 'Portfolio'],
    ['posts', 'Posts'],
    ['tags', 'Tags']
  ];

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

<header class="m-auto w-full">
  <div id="top" class="mb-14 h-0" />
  <nav
    class={clsx(
      'fixed top-0 z-50 w-full select-none',
      'border-b border-neutral-200 dark:border-neutral-800 ',
      'bg-white !bg-opacity-80 backdrop-blur-sm dark:bg-neutral-900',
      'text-neutral-700 dark:text-neutral-200'
    )}
  >
    <div
      class={clsx(
        'blog-container flex justify-between',
        '[&_*]:transition-shape [&_*]:duration-500 [&_*]:ease-spring'
      )}
    >
      <LogoButton />
      <div class="my-auto flex gap-2">
        <div
          class={clsx(
            'my-auto flex justify-end gap-x-0.5 overflow-hidden',
            menuOpened || widthEnough ? '' : 'w-0'
          )}
        >
          {#each navLinks as [pathname, name]}
            <a
              href="/{pathname}"
              class="m-1 h-fit"
              tabindex={menuOpened || widthEnough ? 0 : -1}
              data-sveltekit-preload-data="hover"
            >
              <p class="text-base font-bold sm:text-xl">{name}</p>
            </a>
          {/each}
        </div>
        <Hamburger bind:open={menuOpened} tabindex={widthEnough ? -1 : 0} />
        <ThemeButton />
      </div>
    </div>
    <div class="w-full">
      <div
        class="h-0.5 w-0 rounded bg-neutral-700 dark:bg-neutral-200"
        style="width: {readProgress}%;"
      />
    </div>
  </nav>
</header>
