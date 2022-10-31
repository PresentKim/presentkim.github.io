<script>
  import {tags, findPostsByTag} from '../../posts';
</script>

<style>
    div a * {
        float: left;
    }
</style>

<svelte:head>
    <title>PresentKim Blog Tags</title>
    <meta og:title="PresentKim Blog Tags"/>
    <meta name="description" content="Tags of PresentKim Blog"/>
    <meta og:description="Tags of PresentKim Blog"/>
</svelte:head>

{#each tags as tag}
    <div>
        <!-- link article to /tags/$tag -->
        <a href={`/tags/${tag}`}>
            <p>{tag}</p> <strong>({findPostsByTag(tag).length})</strong>
        </a>
    </div>
{/each}