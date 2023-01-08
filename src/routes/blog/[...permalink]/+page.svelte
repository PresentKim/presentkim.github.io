<script lang="ts">
  import type { PostData, PostMetadata, MdRenderResult } from '$lib/utils/blog';

  export let data: PostData;

  let meta: PostMetadata;
  let content: MdRenderResult;
  let style: string;
  $: {
    meta = data.metadata;
    content = data.content;

    style = content.css.code ? '<' + `style>${content.css.code}</style>` : '';
  }
</script>

<svelte:head>
  {#if content.head}
    {@html content.head}
  {/if}
  <title>{meta.title}</title>
  <meta name="description" content={meta.summary} />
  <meta property="og:title" content={meta.title} />
  <meta property="og:description" content={meta.summary} />
</svelte:head>

<div class="container mx-auto px-5">
  <h1 class="text-2xl md:text-5xl font-bold">{meta.title}</h1>
  <div class="flex flex-wrap flex-row my-3 text-sm text-center">
    <p class="px-2 py-1 text-neutral-500 dark:text-neutral-600">
      {meta.formattedDate}
    </p>
    <div class="flex flex-wrap font-bold text-green-500 dark:text-green-400">
      {#each meta.tags as tag}
        <a class="m-1 px-2 py-1 rounded-sm bg-nestable-neutral" href="/tags/{tag}">
          <code>#{tag}</code>
        </a>
      {/each}
    </div>
  </div>

  {#if content.html}
    <div class="prose lg:prose-xl prose-neutral dark:prose-invert max-w-full ">
      {@html content.html}
    </div>
  {/if}
</div>

{#if style}
  {@html style}
{/if}
