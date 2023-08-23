<script lang="ts">
  import clsx from 'clsx';

  import type { PostInfo } from '$lib/utils/blog';

  export let posts: PostInfo[];
</script>

<section
  class="justify-left mx-auto flex flex-col gap-y-3 divide-y divide-mono6"
>
  {#each posts as { permalink, title, summary, formattedDate }}
    <article class="flex w-full flex-col p-3">
      <a href={`/${permalink}`} data-sveltekit-preload-data="hover">
        <h2 class="line-clamp-1 font-bold text-base">
          {title}
        </h2>
        <p class="my-3 line-clamp-3 overflow-hidden text-ellipsis text-sm">
          {summary}
        </p>

        <p class="text-right text-mono3 text-sm">
          {formattedDate}
        </p>
      </a>
    </article>
  {/each}
</section>
