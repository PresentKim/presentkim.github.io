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

<div>
  <div class="mb-8 text-2xl font-bold">
    <a
      href={`https://www.acmicpc.net/problem/${data.id}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h1>
        <img
          class="inline-flex w-9"
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
        <h3 class="mb-4 border-b-2 border-b-neutral-500 pb-1">{name}</h3>
        <div class="article max-w-full">
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
            <h3 class="mb-4 border-b-2 border-b-neutral-500 pb-1">
              {`예제 ${['입력', '출력'][j]} ${i + 1}`}
            </h3>
            <pre class="bg-nestable-neutral min-h-[2rem] p-2"><code
                class="overflow-scroll">{put}</code
              ></pre>
          </div>
        {/each}
      </div>
    {/each}
  {/if}

  {#if data.tags}
    <div class="mb-8" id="tags">
      <h3 class="mb-4 border-b-2 pb-1">알고리즘 분류</h3>
      <ul class="mx-3 list-inside list-disc">
        {#each data.tags as tag}
          <li class="font-bold">{tag}</li>
        {/each}
      </ul>
    </div>
  {/if}
</div>
