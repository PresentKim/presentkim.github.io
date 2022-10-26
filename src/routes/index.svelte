<script>
    // import the list of posts
    import {posts} from '../posts'
</script>

<style>
    a {
        text-decoration: none;
    }
</style>

<h1>My blog</h1>
{#each posts as post}
    <article>
        <!-- link article to /posts/$permalink -->
        <a href={`/posts/${post.permalink}`}>
            <h2>{post.title}</h2>
            <p>{post.summary}</p>
        </a>
    </article>
{/each}