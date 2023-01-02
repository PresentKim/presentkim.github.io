<script lang="ts">
  import type { PostData } from '.';
  import { PostCard } from '.';

  export let posts: PostData[];
</script>

<div>
  {#each posts as post}
    <PostCard {post} />
  {/each}
</div>

<style lang="scss">
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>
