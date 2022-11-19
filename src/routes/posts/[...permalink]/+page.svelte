<script lang="ts">
  import type { PostData, MarkdownResult } from '$lib/utils/posts';
  import Tags from '$lib/components/Tags.svelte';

  export let data: { metadata: PostData; content: MarkdownResult };

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

<h1>{title}</h1>
<p>{formattedDate}</p>
<Tags {tags} />

{#if html}
  {@html html}
{/if}

{#if style}
  {@html style}
{/if}

<style>
  h1 {
    margin-bottom: 0;
  }

  p {
    margin-top: 0;
    color: var(--comment-color);
  }
</style>
