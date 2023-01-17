<script>
  import PostList from '$lib/components/PostList.svelte';

  export let data;
</script>

<svelte:head>
  <title>Tag: {data.tag} - 현재는 개발중</title>
  <meta property="og:title" content="Tag: {data.tag} - 현재는 개발중" />

  <meta name="description" content="현재는 개발중 블로그의 {data.tag} 태그를 확인해보세요" />
  <meta property="og:description" content="현재는 개발중 블로그의 {data.tag} 태그를 확인해보세요" />
</svelte:head>

<h1 class="text-4xl font-bold mx-5 mb-3"># {data.tag}</h1>
<PostList posts={data.posts} />
