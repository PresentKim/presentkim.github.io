<script>
  export let tags = [];
</script>

<div>
  {#each tags as tag}
    <a href="/tags/{tag}"><code>#{tag}</code></a>
  {/each}
</div>

<style lang="scss">
  div {
    code {
      color: var(--hue2);
      padding: 0.25em 0.5em;
      margin: 0 0.3rem;
    }

    a {
      display: inline-block;

      &:first-child code{
        margin-left: 0;
      }

      &:last-child code{
        margin-right: 0;
      }
    }
  }
</style>
