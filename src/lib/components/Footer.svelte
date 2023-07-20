<script>
  import clsx from 'clsx';
</script>

<footer
  class={clsx(
    'min-h-14 mt-3 w-full py-3',
    'bg-neutral-200 text-neutral-550 dark:bg-neutral-900 dark:text-neutral-350'
  )}
>
  <nav class="mb-2 flex flex-row justify-center gap-5 text-center">
    <a
      href="mailto:contanct@present.kim"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="김현재의 이메일"
      class="hover:text-blue-500 dark:hover:text-blue-400"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        role="link"
        viewBox="0 0 24 24"
        class="w-6"
      >
        <g class="stroke-round fill-none stroke-current stroke-2">
          <path
            d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2
               v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"
          />
          <path d="m3 7 9 6 9-6" />
        </g>
      </svg>
    </a>
    <a
      href="https://github.com/PresentKim"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="김현재의 깃허브"
      class="hover:text-blue-500 dark:hover:text-blue-400"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        role="link"
        viewBox="0 0 24 24"
        class="w-6"
      >
        <g class="stroke-round fill-none stroke-current stroke-2">
          <path
            d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2
               c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2
               s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1
               a4.2 4.2 0 0 0-.1 3.2
               A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"
          />
        </g>
      </svg>
    </a>
    <a
      href="/rss.xml"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="블로그 RSS XML"
      class="hover:text-blue-500 dark:hover:text-blue-400"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        role="link"
        viewBox="0 0 24 24"
        class="w-6"
      >
        <g class="stroke-round fill-none stroke-current stroke-2">
          <path
            d="M4 19a1 1 0 1 0 2 0 1 1 0 1 0-2 0M4 4
               a16 16 0 0 1 16 16M4 11a9 9 0 0 1 9 9"
          />
        </g>
      </svg>
    </a>
  </nav>
  <div class="text-center text-sm">
    <p>© 2023 PresentKim. All Rights Reserved.</p>
  </div>
</footer>
