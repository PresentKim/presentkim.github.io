<script lang="ts">
  import clsx from 'clsx';

  import { page } from '$app/stores';

  import { toggleTheme } from '$lib/utils/theme';
  import { runOnEnter } from '$lib/utils/utils';

  let navOpen: boolean;
  let scrollY: number;

  const navLinks = [
    ['/portfolio', 'Portfolio'],
    ['/posts', 'Posts'],
    ['/tags', 'Tags']
  ];

  //Close hamburger menu when page redirected
  page.subscribe(() => (navOpen = false));
</script>

<svelte:window bind:scrollY />

<header
  class={clsx(
    'absolute sm:fixed',
    'bg-white dark:bg-neutral-900',
    'flex select-none items-center justify-between',
    'm-auto h-[55px] w-full px-4',
    'transition-shadow ease-in-out-200 sm:scrolled:shadow-lg'
  )}
>
  <div id="Logo">
    <a
      href="/"
      data-sveltekit-preload-data="hover"
      aria-label="메인페이지로 이동"
      class={clsx(
        'group flex flex-row items-center',
        'select-none overflow-clip'
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1024"
        height="1024"
        viewBox="0 0 42 42"
        class={clsx(
          'mr-1 h-7 w-7 md:h-8 md:w-8',
          'stroke-round fill-none stroke-[6px]',
          'group-hover:[&_path]:stroke-emerald-500',
          '[&_path]:transition-all [&_path]:ease-in-out-200'
        )}
      >
        <path
          class={clsx(
            'stroke-emerald-900',
            'group-hover:-translate-y-[3px] group-hover:translate-x-[7px]'
          )}
          d="M17 37V10l14-4v12l-14 4m11-2 4 17"
        />
        <path
          class={clsx('stroke-emerald-500', 'group-hover:-translate-x-[10px]')}
          d="M13 35V7l14-4v12l-14 4"
        />
      </svg>

      <span
        class={clsx(
          'whitespace-nowrap text-xl font-extrabold md:text-2xl',
          '[@media(max-width:17rem)]:hidden'
        )}
      >
        현재는 개발중
      </span>
    </a>
  </div>
  <div
    id="buttons"
    class={clsx(
      'relative my-auto flex flex-row gap-2 sm:flex-row-reverse',
      'max-sm:scrolled:fixed max-sm:scrolled:right-4 max-sm:scrolled:top-2',
      'translate-y-0 max-sm:scrolled:-translate-y-[55px]'
    )}
  >
    <button
      aria-label="Go to Top"
      class="header-button-wrap hidden max-sm:scrolled:block sm:hidden"
      on:keydown={runOnEnter(() => (scrollY = 0))}
      on:mousedown={() => (scrollY = 0)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        class="header-button stroke-round fill-none stroke-current"
      >
        <path class="stroke-[8px]" d="M25,45 25,8 08,25 25,8 42,25" />
      </svg>
    </button>
    <button
      aria-label="Change Theme"
      class="header-button-wrap max-sm:scrolled:delay-150"
      on:keydown={runOnEnter(toggleTheme)}
      on:mousedown={toggleTheme}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        class="header-button [&_*]:transition-transform [&_*]:ease-spring-500"
      >
        <mask id="moonMask">
          <rect class="fill-white" width="50" height="50" />
          <circle
            class="origin-top-right scale-0 fill-black dark:scale-100"
            cx="34"
            cy="14"
            r="16"
          />
        </mask>

        <g mask="url(#moonMask)">
          <circle
            class="scale-50 fill-current dark:scale-125"
            cx="25"
            cy="25"
            r="16"
          />

          <g
            class={clsx(
              'stroke-round fill-none stroke-current stroke-[5px]',
              'scale-100 dark:scale-0'
            )}
          >
            <line x1="4" y1="25" x2="12" y2="25" />
            <line x1="46" y1="25" x2="38" y2="25" />
            <line x1="25" y1="4" x2="25" y2="12" />
            <line x1="25" y1="46" x2="25" y2="38" />
            <line x1="10" y1="10" x2="15" y2="15" />
            <line x1="40" y1="40" x2="35" y2="35" />
            <line x1="10" y1="40" x2="15" y2="35" />
            <line x1="40" y1="10" x2="35" y2="15" />
          </g>
        </g>
      </svg>
    </button>
    <button
      aria-label="Open Menu"
      class="header-button-wrap max-sm:scrolled:delay-300 sm:hidden"
      on:keydown={runOnEnter(() => (navOpen = !navOpen))}
      on:mousedown={() => (navOpen = !navOpen)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        class={clsx(
          'header-button stroke-round fill-none stroke-current stroke-[6px]',
          '[&_*]:transition-transform [&_*]:ease-spring-500',
          navOpen &&
            clsx(
              '[&_path]:translate-y-0',
              '[&_path]:rotate-45',
              'first:[&_path]:-rotate-45'
            )
        )}
      >
        <path class="origin-center -translate-y-3" d="M04,25 46,25" />
        <path class="origin-center" d="M04,25 46,25" />
        <path class="origin-center translate-y-3" d="M04,25 46,25" />
      </svg>
    </button>
    <nav
      class={clsx(
        'hidden sm:flex',
        'my-auto justify-end gap-x-2',
        '[&>*]:transition-transform [&>*]:ease-in-out-500'
      )}
    >
      {#each navLinks as [pathname, label]}
        <a
          href={pathname}
          class="hover:text-blue-500 dark:hover:text-blue-400"
          tabindex="0"
          aria-label={label}
          data-sveltekit-preload-data="hover"
        >
          <p class="text-base font-bold sm:text-xl">{label}</p>
        </a>
      {/each}
    </nav>
  </div>
</header>
