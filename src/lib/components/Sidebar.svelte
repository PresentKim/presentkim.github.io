<script lang="ts">
  import clsx from 'clsx';

  import { sidebar } from '$lib/utils/document-dateset';
  import { darkMode } from '$lib/utils/theme';

  const navLinks = [
    ['home', 'Home', '/'],
    ['list', 'Posts', '/posts'],
    ['tags', 'Tags', '/tags'],
    ['info', 'About', '/about']
  ];

  const footerLinks = [
    ['mail', 'Contact to E-mail', 'mailto:contanct@present.kim'],
    ['telegram', 'Contact to Telegram', 'https://t.me/PresentKim', true],
    ['github', 'Go to Github', 'https://github.com/PresentKim', true],
    ['rss', 'Go to Blog Feed', '/atom.xml', true]
  ];
</script>

<aside
  aria-label="Sidebar"
  id="sidebar"
  class={clsx(
    'fixed left-0 top-0 z-50 flex flex-col justify-between',
    'h-full w-64 max-w-full p-0 text-mono-500',
    'border-r border-mono-100 bg-mono-200',
    '-translate-x-full sidebar:translate-x-0 lg:translate-x-0',
    'transition-transform ease-in-out-500'
  )}
>
  <button
    id="sidebar-toggle-button"
    aria-label="Open Sidebar"
    on:click={() => ($sidebar = !$sidebar)}
    class={clsx(
      'fixed right-0 top-2 translate-x-full p-2 sidebar:translate-x-0 lg:hidden',
      'scrolled:translate-x-0 scroll-up:translate-x-full',
      'rounded-r-lg bg-mono-200',
      'transition-[transform,background] ease-in-out-500'
    )}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      class={clsx(
        'h-7 w-7 lg:hidden',
        'stroke-round fill-none stroke-current stroke-[6px]',
        '[&_*]:transition-transform [&_*]:ease-spring-700',
        $sidebar &&
          clsx(
            '[&_path]:translate-y-0',
            '[&_path]:rotate-45',
            'first:[&_path]:-rotate-45'
          )
      )}
    >
      <path class="origin-center -translate-y-3" d="M04,25 46,25" />
      <path class="origin-center" d="M04,25 32,25" />
      <path class="origin-center translate-y-3" d="M04,25 46,25" />
    </svg>
  </button>
  <header id="sidebar-title" class="mt-16 flex w-full flex-col items-center">
    <div id="profile-wrapper" class="relative mx-auto text-center">
      <img
        src="https://avatars.githubusercontent.com/u/13284800?v=4"
        alt="Profile"
        class="h-36 w-36 rounded-full shadow-2xl ring-4 ring-mono-200"
      />
      <div
        class={clsx(
          'absolute bottom-2 right-2',
          'h-1/5 w-1/5',
          'rounded-full bg-background shadow-2xl ring-4 ring-mono-200',
          'transition-[width_height_bottom_right] ease-in-out-500'
        )}
      >
        <p>😎</p>
      </div>
    </div>
    <p class="mt-4 text-xl font-bold">현재는 개발중</p>
  </header>
  <nav class="flex flex-col items-center justify-center gap-2">
    {#each navLinks as [icon, label, url]}
      <a
        href={url}
        class={clsx(
          'mx-auto w-48 items-start rounded-2xl py-2 pl-6 text-start',
          'bg-mono-500 bg-opacity-0 hover:bg-opacity-20',
          'transition-[background-color] ease-in-out-300'
        )}
      >
        <i class="{icon} before:text-3xl" />
        <span class="ml-4 font-bold">{label}</span>
      </a>
    {/each}
  </nav>
  <br />
  <footer
    id="sidebar-buttons"
    class="mx-4 mb-8 flex w-[calc(100%-2rem)] flex-row justify-between"
  >
    <button
      aria-label="Change Theme"
      class="sidebar-button [&_*]:origin-center"
      on:click={() => ($darkMode = !$darkMode)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        class="[&_*]:transition-transform [&_*]:ease-spring-500"
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
    {#each footerLinks as [icon, label, url, external = false]}
      <a
        aria-label={label}
        href={url}
        class="sidebar-button"
        target={external ? '_blank' : '_self'}
      >
        <i class={icon} />
      </a>
    {/each}
  </footer>
</aside>
{#if $sidebar}
  <label
    aria-label="Cover of contents"
    class={clsx(
      'fixed z-40 h-full w-full',
      'bg-mono-200 opacity-50 lg:opacity-0',
      'transition-opacity ease-in-out-500'
    )}
  >
    <input
      type="checkbox"
      class="hidden"
      on:change={() => ($sidebar = false)}
    />
  </label>
{/if}
