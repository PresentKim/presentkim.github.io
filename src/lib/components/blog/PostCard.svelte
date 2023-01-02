<script lang="ts">
  import type { PostData } from '.';
  import { PostTags } from '.';

  export let post: PostData;
  const { title, summary, tags, formattedDate, permalink } = post;
</script>

<div class="post-card">
  <a href={`/blog/${permalink}`}>
    <div class="post-card-title">
      <h4>{title}</h4>
      <p>{summary}</p>
    </div>

    <p class="post-card-date">
      {formattedDate}
    </p>
    <div class="post-card-tags">
      <PostTags {tags} />
    </div>
  </a>
</div>

<style lang="scss">
  .post-card {
    display: flex;
    flex-direction: column;

    width: 18rem;
    margin: 0.5rem;
    padding: 1rem;
    overflow: hidden;

    border-radius: 4px;
    background-color: var(--bg-block);
    box-shadow: #0003 0 4px 16px 0;
    transition: all 0.25s ease-in-out;

    @media (max-width: 1056px) {
      width: calc(50% - 4rem);
    }

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .post-card-title {
    h4 {
      font-size: 1.25rem;
      font-weight: bold;
      line-height: 1.5;

      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    p {
      font-size: 0.875rem;
      font-weight: lighter;
      line-height: 1.5;

      height: 4rem;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .post-card-date {
    font-size: 0.75rem;
    font-weight: lighter;
    color: var(--mono2);
  }

  .post-card-tags {
    display: flex;
    font-size: 0.75rem;

    height: 1.25rem;
    overflow: hidden;
  }

  a {
    display: block;
    text-decoration: none;
    color: var(--text-color);
  }
</style>
