<script>
  // it takes an array of posts as a prop
  export let posts;
</script>

<!-- iterate thru each post and output an <article> tag -->
{#each posts as post}
    <article>
        <!-- link to /posts/:permalink page -->
        <a href={`/posts/${post.permalink}`}>
            <h2>{post.title}</h2>
            <p>{post.summary}</p>
        </a>
    </article>
{/each}