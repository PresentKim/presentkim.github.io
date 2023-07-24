<script>
  import clsx from 'clsx';

  import mail from '$lib/assets/img/footer/mail.svg?raw';
  import github from '$lib/assets/img/footer/github.svg?raw';
  import rss from '$lib/assets/img/footer/rss.svg?raw';

  const navLinks = [
    ['mailto:contanct@present.kim', '김현재의 이메일', mail],
    ['https://github.com/PresentKim', '김현재의 깃허브', github],
    ['https://present.kim/rss.xml', '블로그 RSS', rss]
  ];
</script>

<footer
  class={clsx(
    'min-h-14 mt-3 w-full py-3',
    'text-neutral-550 dark:text-neutral-350',
    'hover:[&_a]:text-blue-500 dark:hover:[&_a]:text-blue-400'
  )}
>
  <nav class="flex flex-row justify-center gap-4">
    {#each navLinks as [url, label, icon]}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        class="w-6"
      >
        {@html icon}
      </a>
    {/each}
  </nav>
  <div class="text-center text-sm leading-loose [&_a]:underline">
    <p>© 2023 PresentKim. All Rights Reserved.</p>
    <p>
      Made with
      <a href="https://kit.svelte.dev/">SvelteKit</a>
      and
      <a href="https://tailwindcss.com/">TailwindCSS</a>
    </p>
  </div>
</footer>
