<script>
  // take in tags as a prop
  export let tags;
</script>

<style>
    a, code {
        display: inline-block;
    }

    code {
        padding: 0.25em 0.5em;
        margin-right: 0.5em;
        margin-bottom: 1em;
        color: var(--link-color);
    }
</style>

<nav>
    <!-- iterate through each tag -->
    {#each tags as tag}
        <!-- link each tag to /tags/:tag page -->
        <a href="/tags/{tag}"><code>#{tag}</code></a>
    {/each}
</nav>