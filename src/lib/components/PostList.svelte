<script lang="ts">
  import type { PostInfo } from '$lib/utils/blog';

  export let posts: PostInfo[];
</script>

<section class="flex mx-auto flex-col gap-y-3 justify-left">
  {#each posts as { permalink, title, summary, formattedDate }}
    <article
      class="flex flex-col w-full p-3 border-b border-b-neutral-500 dark:border-b-neutral-700"
    >
      <a href={`/${permalink}`} data-sveltekit-preload-data="hover">
        <h4 class="text-xl font-bold">
          {title}
        </h4>
        <p class="my-3 text-base overflow-hidden text-ellipsis line-clamp-3">
          {summary}
        </p>

        <p
          class="flex text-sm text-right text-neutral-550 dark:text-neutral-350"
        >
          {formattedDate}
        </p>
      </a>
    </article>
  {/each}
</section>
