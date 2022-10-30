<script>
  // take in tags as a prop
  export let tags;
</script>

<nav>
    <!-- iterate through each tag -->
    {#each tags as tag}
        <!-- link each tag to /tags/:tag page -->
        <a href="/tags/{tag}">#{tag}</a>
    {/each}
</nav>