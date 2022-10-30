<script>
  import {tags, findPostsByTag} from '../../posts';
</script>

<style>
    div a * {
        float: left;
    }
</style>

{#each tags as tag}
    <div>
        <!-- link article to /tags/$tag -->
        <a href={`/tags/${tag}`}>
            <p>{tag}</p> <strong>({findPostsByTag(tag).length})</strong>
        </a>
    </div>
{/each}