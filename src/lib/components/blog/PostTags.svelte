<script>
  export let tags = [];
</script>

{#each tags as tag}
  <a href="/tags/{tag}"><code>#{tag}</code></a>
{/each}

<style lang="scss">
  a {
    display: inline-block;
  }

  code {
    padding: 0.25em 0.5em;
    margin-right: 0.5em;
    margin-bottom: 1em;
    color: var(--hue2);
  }
</style>
