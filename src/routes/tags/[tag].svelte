<script context="module">
  import {findPostsByTag} from '../../posts.js';

  export function preload(page) {
    const {tag} = page.params;
    const posts = findPostsByTag(tag);
    return {tag, posts};
  }
</script>

<script>
  // props are provided by preload() function
  import PostList from '../../components/PostList.svelte';

  export let tag, posts;
</script>

<!-- show #tag as title -->
<h1>#{tag}</h1>

<PostList {posts}/>