<script>
  import { PostList } from '$lib/components/blog';

  export let data;
</script>

<h1 class="text-4xl md:text-6xl font-bold mx-5 mb-3"># {data.tag}</h1>
<PostList posts={data.posts} />
