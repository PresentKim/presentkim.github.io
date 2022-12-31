<script lang="ts">
  export let id: number;
  import { getBojInfoById } from '$lib/utils/boj.js';
  let infoPromise = getBojInfoById(id);
</script>

{#await infoPromise}
  <p style="color: var(--hue6)">Loading Boj Problem Info...</p>
{:then { id, title, tier, tags, description, input, output, limit, sample }}
  <div id="title">
    <a href={`https://www.acmicpc.net/problem/${id}`} target="_blank" rel="noreferrer">
      <h1>
        <img id="tier-icon" alt="tier{tier}" src="https://static.solved.ac/tier_small/{tier}.svg" />
        {id} :: {title}
      </h1>
    </a>
  </div>

  <div id="description" class="tab">
    <h3>문제</h3>
    {@html description}
  </div>

  {#if input}
    <div id="input" class="tab">
      <h3>입력</h3>
      {@html input}
    </div>
  {/if}

  {#if output}
    <div id="output" class="tab">
      <h3>출력</h3>
      {@html output}
    </div>
  {/if}

  {#if sample}
    {#each sample as [input, output], i}
      <div class="sample-io tab">
        <div>
          <h3>예제 입력 {i + 1}</h3>
          <pre><code>{input}</code></pre>
        </div>
        <div>
          <h3>예제 출력 {i + 1}</h3>
          <pre><code>{output}</code></pre>
        </div>
      </div>
    {/each}
  {/if}

  {#if limit}
    <div id="limit" class="tab">
      <h3>제한</h3>
      {@html limit}
    </div>
  {/if}

  {#if tags}
    <div id="tags" class="tab">
      <h3>알고리즘 분류</h3>
      <ul>
        {#each tags as tag}
          <li>{tag}</li>
        {/each}
      </ul>
    </div>
  {/if}
{:catch error}
  <p style="color: var(--hue5_2)">Failed load Boj Problem Info</p>
{/await}

<style lang="scss">
  .tab {
    margin: 3rem 0;
  }

  h3 {
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--text-color);
  }

  #description {
    margin-top: 0;
  }

  #tier-icon {
    display: inline-block;
    width: 2.25rem;
    @media (max-width: 768px) {
      width: 1.75rem;
    }
  }

  .sample-io {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

    margin-top: 0;
    margin-bottom: 0;

    div {
      flex: 1;
      flex-basis: 40%;
      &:nth-child(1) {
        margin-right: 2rem;
      }

      pre {
        background: var(--bg-block);
        padding: 0.5rem;
        code {
          overflow: scroll;
        }
      }

      @media (max-width: 768px) {
        margin-right: 0 !important;
        flex-basis: 100%;
      }
    }
  }
</style>
