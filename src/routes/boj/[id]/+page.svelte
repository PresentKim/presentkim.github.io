<script lang="ts">
  import type { BojInfo } from '$lib/utils/boj';

  export let data: BojInfo;
  let { id, title, description, tier, input, output, limit, sample, tags } = data;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
</svelte:head>

<h1>{title}</h1>
{#each tags as tag}
  <!-- link each tag to /tags/:tag page -->
  <code>#{tag}</code>
{/each}
<div id="description">
  <h3>문제</h3>
  {@html description}
</div>
<div id="input">
  <h3>입력</h3>
  {@html input}
</div>
<div id="output">
  <h3>출력</h3>
  {@html output}
</div>
<div id="limit">
  <h3>제한</h3>
  {@html limit}
</div>

<style>
  h1 {
    margin-bottom: 0;
  }

  p {
    margin-top: 0;
    color: var(--mono3);
  }
</style>
