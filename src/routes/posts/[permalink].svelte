<script context="module">
  import {findPost} from '../../posts';

  export function preload(page) {
    return {post: findPost(page.params.permalink)};
  }
</script>

<script>
  import Tags from '../../components/Tags.svelte';

  export let post;
</script>

<svelte:head>
    <title>{post.title}</title>
    <meta og:title={post.title}/>
    <meta name="description" content={post.summary}/>
    <meta og:description={post.summary}/>
</svelte:head>

<h1>{post.title}</h1>
<Tags tags={post.tags}/>

{@html post.html}