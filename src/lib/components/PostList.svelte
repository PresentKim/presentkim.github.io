<script lang="ts">
  import type { PostMetadata } from '$lib/utils/blog';

  export let posts: PostMetadata[];
</script>

<section class="flex mx-auto flex-col gap-y-3 justify-left">
  {#each posts as post}
    <article
      class="flex flex-col w-full p-3 border-b border-b-neutral-500 dark:border-b-neutral-700"
    >
      <a href={`/posts/${post.permalink}`}>
        <h4 class="text-xl font-bold">
          {post.title}
        </h4>
        <p class="my-3 text-base overflow-hidden text-ellipsis line-clamp-3">
          {post.summary}
        </p>

        <p class="flex text-sm text-right text-neutral-550 dark:text-neutral-350">
          {post.formattedDate}
        </p>
      </a>
    </article>
  {/each}
</section>
