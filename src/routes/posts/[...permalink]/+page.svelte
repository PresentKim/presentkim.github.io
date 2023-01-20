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

<h1 class="text-2xl font-bold">{meta.title}</h1>
<div class="flex flex-wrap flex-row my-3 text-sm text-center">
  <p class="px-2 py-1 text-neutral-500 dark:text-neutral-600">
    {meta.formattedDate}
  </p>
  <div class="flex flex-wrap font-bold text-emerald-500 dark:text-emerald-400">
    {#each meta.tags as tag}
      <a class="m-1 px-2 py-1 rounded-sm bg-nestable-neutral" href="/tags/{tag}">
        <code>#{tag}</code>
      </a>
    {/each}
  </div>
</div>

<div class="prose prose-neutral dark:prose-invert max-w-full">
  {@html content.html}
</div>

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
  loading="lazy"
/>
