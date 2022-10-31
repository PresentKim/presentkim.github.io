<script>
  import {posts} from '../../posts';
  import PostList from '../../components/PostList.svelte';
</script>

<svelte:head>
    <title>PresentKim Blog Posts</title>
    <meta og:title="PresentKim Blog Posts"/>
    <meta og:description="Posts of PresentKim Blog"/>
</svelte:head>

<PostList {posts}/>