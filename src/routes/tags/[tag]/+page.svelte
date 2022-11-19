<script>
  import PostList from '$lib/components/PostList.svelte';

  export let data;

  const { tag, posts } = data;
</script>

<h1># {tag}</h1>
<PostList {posts} />
