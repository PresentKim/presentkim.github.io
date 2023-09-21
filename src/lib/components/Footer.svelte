<script>
  import clsx from 'clsx';

  import mail from '$lib/assets/img/footer/mail.svg?raw';
  import github from '$lib/assets/img/footer/github.svg?raw';
  import rss from '$lib/assets/img/footer/rss.svg?raw';

  const navLinks = [
    ['mailto:contanct@present.kim', '김현재의 이메일', mail],
    ['https://github.com/PresentKim', '김현재의 깃허브', github],
    ['https://present.kim/atom.xml', '블로그 RSS', rss]
  ];
</script>

<footer
  class={clsx(
    'min-h-14 mt-3 w-full py-3',
    'text-mono-500',
    'hover:[&_a]:text-secondary'
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
  <div class="text-center leading-loose text-sm [&_a]:underline">
    <p>© 2023 PresentKim. All Rights Reserved.</p>
    <p>
      Made with
      <a href="https://kit.svelte.dev/">SvelteKit</a>
      and
      <a href="https://tailwindcss.com/">TailwindCSS</a>
    </p>
  </div>
</footer>
