<script lang="ts">
  import type { PostData } from '$lib/components/blog';

  export let data: PostData;

  const { title, summary, formattedDate, tags } = data.metadata;
  const { html, head, css } = data.content;
  const style = css.code ? '<' + `style>${css.code}</style>` : '';
</script>

<svelte:head>
  {#if head}
    {@html head}
  {/if}
  <title>{title}</title>
  <meta name="description" content={summary} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={summary} />
</svelte:head>

<div class="container mx-auto px-5">
  <h1 class="text-2xl md:text-5xl font-bold">{title}</h1>
  <div class="flex flex-wrap flex-row my-3 text-sm text-center">
    <p class="px-2 py-1 text-neutral-500 dark:text-neutral-600">
      {formattedDate}
    </p>
    <div class="flex flex-wrap font-bold text-green-500 dark:text-green-400">
      {#each tags as tag}
        <a class="m-1 px-2 py-1 rounded-sm bg-nestable-neutral" href="/tags/{tag}">
          <code>#{tag}</code>
        </a>
      {/each}
    </div>
  </div>

  {#if html}
    <div class="prose lg:prose-xl prose-neutral dark:prose-invert max-w-full ">
      {@html html}
    </div>
  {/if}
</div>

{#if style}
  {@html style}
{/if}
