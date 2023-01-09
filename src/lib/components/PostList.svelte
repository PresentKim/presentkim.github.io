<script lang="ts">
  import type { PostMetadata } from '$lib/utils/blog';

  export let posts: PostMetadata[];
</script>

<div class="md:mx-3 flex mx-auto flex-row flex-wrap justify-left">
  {#each posts as post}
    <div
      class="flex flex-col m-2 p-3 overflow-hidden rounded
             w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33%-1rem)] xl:w-[calc(25%-1rem)]
             bg-white dark:bg-neutral-800 shadow"
    >
      <a href={`/blog/${post.permalink}`}>
        <div class="post-card-title">
          <h4
            class="text-xl font-bold overflow-hidden text-ellipsis whitespace-nowrap
                   border-b-2 border-b-neutral-500 dark:border-b-neutral-400"
          >
            {post.title}
          </h4>
          <p class="h-16 pt-2 text-sm overflow-hidden text-ellipsis ">{post.summary}</p>
        </div>

        <div
          class="flex text-sm text-right font-bold text-neutral-400 dark:text-neutral-500
                 overflow-x-scroll overflow-y-hidden scrollbar-hide
                 border-t-2 border-t-neutral-200 dark:border-t-neutral-700"
        >
          {post.formattedDate}
        </div>
      </a>
    </div>
  {/each}
</div>
