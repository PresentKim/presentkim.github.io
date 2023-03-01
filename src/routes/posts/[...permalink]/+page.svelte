<script lang="ts">
  import type { MdRenderResult, PostData, PostMetadata } from '$lib/utils/blog';
  import { theme } from '$lib/utils/theme';
  import { page } from '$app/stores';
  import Giscus from '@giscus/svelte';

  export let data: PostData;

  let meta: PostMetadata;
  let content: MdRenderResult;
  let style: string;
  $: {
    meta = data.metadata;
    content = data.content;

    style = content?.css.code ? '<' + `style>${content.css.code}</style>` : '';
  }
</script>

<svelte:head>
  {#if content.head}
    {@html content.head}
  {/if}

  {#if style}
    {@html style}
  {/if}

  <title>{meta.title} - 현재는 개발중</title>
  <meta property="og:title" content="{meta.title} - 현재는 개발중" />

  <meta name="description" content={meta.summary} />
  <meta property="og:description" content={meta.summary} />

  <meta property="og:type" content="article" />

  <meta name="giscus:backlink" content="https://present.kim{$page.url.pathname}" />
</svelte:head>

<h1>{meta.title}</h1>
<div
  class="flex flex-row mb-6 text-sm text-center
         border-b border-b-neutral-500 dark:border-b-neutral-700"
>
  <p class="py-6 my-auto text-neutral-550 dark:text-neutral-350">
    {meta.formattedDate}
  </p>
  <div class="flex flex-wrap font-bold text-emerald-500 dark:text-emerald-400">
    {#each meta.tags as tag}
      <a class="mx-1 my-auto px-2 py-1 rounded-sm bg-nestable-neutral" href="/tags/{tag}">
        <code>#{tag}</code>
      </a>
    {/each}
  </div>
</div>

<section id="post" class="article">
  {@html content.html}
</section>

<Giscus
  id="comments"
  repo="PresentKim/presentkim.github.io"
  repoId="R_kgDOIUl1bg"
  category="Announcements"
  categoryId="DIC_kwDOIUl1bs4CTsqQ"
  mapping="specific"
  term="📝Comments of [{$page.params.permalink}]"
  strict="1"
  reactionsEnabled="1"
  emitMetadata="0"
  inputPosition="top"
  theme={$theme}
  lang="ko"
/>
