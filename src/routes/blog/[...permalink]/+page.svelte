<script lang="ts">
  import type { PostData } from '$lib/components/blog';
  import { PostTags } from '$lib/components/blog';

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

<div>
  <h1>{title}</h1>
  <p>{formattedDate}</p>
  <PostTags {tags} />

  {#if html}
    {@html html}
  {/if}
</div>

{#if style}
  {@html style}
{/if}

<style lang="scss">
  h1 {
    margin-bottom: 0;
  }

  p {
    margin-top: 0;
    color: var(--mono3);
  }

  div {
    width: 768px;
    margin: 1rem auto;

    @media (max-width: 768px) {
      width: 100%;
      font-size: 1rem;
    }
  }
</style>
