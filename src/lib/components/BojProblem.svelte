<script lang="ts">
  import { getBojInfoById } from '$lib/utils/boj';

  export let id: string = '1000';

  let tier = 0;
  let title = '로딩중...';
  let dataPromise = getBojInfoById(id);

  dataPromise.then((data) => {
    tier = data.tier;
    title = data.title;
  });
</script>

<details open={tier !== 0}>
  <summary>
    <div class="mb-8 text-2xl font-bold">
      <a
        href={`https://www.acmicpc.net/problem/${id}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h1>
          <img
            class="inline-flex w-9"
            alt="BOJ tier-{tier}"
            src="https://static.solved.ac/tier_small/{tier}.svg"
          />
          {id} :: {title}
        </h1>
      </a>
    </div>
  </summary>
  {#await dataPromise then data}
    {#each [['description', '문제'], ['input', '입력'], ['output', '출력'], ['limit', '제한'], ['hint', '힌트']] as [key, name]}
      {#if data[key]}
        <div class="mb-8" id={key}>
          <h3 class="mb-4 pb-1 border-b-2 border-b-neutral-500">{name}</h3>
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
          class="flex flex-wrap flex-row items-start justify-between mb-8"
        >
          {#each io_puts as put, j}
            <div id="sample-{i}-{j}" class="flex-1 basis-full">
              <h3 class="mb-4 pb-1 border-b-2 border-b-neutral-500">
                {`예제 ${['입력', '출력'][j]} ${i + 1}`}
              </h3>
              <pre class="p-2 min-h-[2rem] bg-nestable-neutral"><code
                  class="overflow-scroll">{put}</code
                ></pre>
            </div>
          {/each}
        </div>
      {/each}
    {/if}

    {#if data.tags}
      <div class="mb-8" id="tags">
        <h3 class="mb-4 pb-1 border-b-2">알고리즘 분류</h3>
        <ul class="mx-3 list-disc list-inside">
          {#each data.tags as tag}
            <li class="font-bold">{tag}</li>
          {/each}
        </ul>
      </div>
    {/if}
  {/await}
</details>

<style lang="scss">
  details > summary {
    list-style: none;
  }
  details > summary::-webkit-details-marker {
    display: none;
  }
</style>
