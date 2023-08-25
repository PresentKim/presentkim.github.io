<script lang="ts">
  import type { PostInfo } from '$lib/utils/blog';

  import PostCard from './PostCard.svelte';

  export let posts: PostInfo[];
</script>

<section class="justify-left mx-auto flex flex-col gap-y-5">
  {#each posts as { permalink, title, summary, formattedDate }}
    <a href={`/${permalink}`} data-sveltekit-preload-data="hover">
      <PostCard {title} {summary} date={formattedDate} tags={['a', 'bn']} />
    </a>
  {/each}
</section>
