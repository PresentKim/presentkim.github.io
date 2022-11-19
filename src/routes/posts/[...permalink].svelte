<script context="module">
  import {findPost} from '../../lib/utils/posts';

  export function preload(page) {
    return {post: findPost(page.params.permalink.join('/'))};
  }
</script>

<script>
  import Tags from '../../lib/components/Tags.svelte';

  export let post;
</script>

<svelte:head>
    <title>{post.title}</title>
    <meta og:title={post.title}/>
    <meta name="description" content={post.summary}/>
    <meta og:description={post.summary}/>
</svelte:head>

<style>
    h1 {
        margin-bottom: 0;
    }

    p {
        margin-top: 0;
        color: var(--comment-color);
    }
</style>

<h1>{post.title}</h1>
<p>{post.formattedDate}</p>
<Tags tags={post.tags}/>

{@html post.html}
