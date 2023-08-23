<script lang="ts">
  import type { PageData } from './$types';

  import MetaTags from '$lib/components/MetaTags.svelte';

  const dataKeys = [
    ['description', '문제'],
    ['input', '입력'],
    ['output', '출력'],
    ['limit', '제한'],
    ['hint', '힌트']
  ];
  export let data: PageData;
</script>

<MetaTags pageName="{data.id} :: {data.title}" description={data.description} />

<div class="article">
  <div id="title">
    <a
      href={`https://www.acmicpc.net/problem/${data.id}`}
      target="_blank"
      rel="noopener noreferrer"
      class="!no-underline"
    >
      <h1 class="mb-8 font-bold text-2xl">
        <img
          class="inline-flex !w-9"
          alt="BOJ tier-{data.tier}"
          src="https://static.solved.ac/tier_small/{data.tier}.svg"
        />
        {data.id} :: {data.title}
      </h1>
    </a>
  </div>
  {#each dataKeys as [key, name]}
    {#if data[key]}
      <div class="mb-8" id={key}>
        <h2 class="mb-4 border-b-2 border-mono6 pb-1 text-lg">{name}</h2>
        <div class="max-w-full text-base">
          {@html data[key]}
        </div>
      </div>
    {/if}
  {/each}

  {#if data.sample}
    {#each data.sample as io_puts, i}
      <div
        id="sample-{i}"
        class="mb-8 flex flex-row flex-wrap items-start justify-between"
      >
        {#each io_puts as put, j}
          <div id="sample-{i}-{j}" class="flex-1 basis-full">
            <h2 class="mb-4 border-b-2 border-b-mono6 pb-1 text-lg">
              {`예제 ${['입력', '출력'][j]} ${i + 1}`}
            </h2>
            <pre class="min-h-[2rem] p-2 text-base"><code
                class="overflow-scroll text-base">{put}</code
              ></pre>
          </div>
        {/each}
      </div>
    {/each}
  {/if}

  {#if data.tags}
    <div class="mb-8" id="tags">
      <h2 class="mb-4 border-b-2 pb-1 text-lg">알고리즘 분류</h2>
      <ul class="mx-3 list-inside list-disc text-base">
        {#each data.tags as tag}
          <li class="font-bold">{tag}</li>
        {/each}
      </ul>
    </div>
  {/if}
</div>
