<script lang="ts">
  import type { PostInfo } from '$lib/utils/blog';

  export let posts: PostInfo[];
</script>

<section class="justify-left mx-auto flex flex-col gap-y-3">
  {#each posts as { permalink, title, summary, formattedDate }}
    <article
      class="flex w-full flex-col border-b border-b-neutral-500 p-3
             dark:border-b-neutral-700"
    >
      <a href={`/${permalink}`} data-sveltekit-preload-data="hover">
        <h4 class="text-xl font-bold">
          {title}
        </h4>
        <p class="my-3 line-clamp-3 overflow-hidden text-ellipsis text-base">
          {summary}
        </p>

        <p
          class="flex text-right text-sm text-neutral-550 dark:text-neutral-350"
        >
          {formattedDate}
        </p>
      </a>
    </article>
  {/each}
</section>
