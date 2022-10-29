<script>
    import Nav from '../components/Nav.svelte';

    export let segment;
</script>

<style>
    :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Apple SD Gothic Neo", "Malgun Gothic", "맑은 고딕", 나눔고딕, "Nanum Gothic", "Noto Sans KR", "Noto Sans CJK KR", arial, 돋움, Dotum, Tahoma, Geneva, sans-serif;
        font-size: 14px;
        line-height: 1.5;
        color: #333;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    :global(h1), :global(h2), :global(h3), :global(h4), :global(h5), :global(h6) {
        margin: 0 0 0.5em 0;
        font-weight: 400;
        line-height: 1.2;
    }

    :global(h1) {
        font-size: 2em;
    }

    :global(a) {
        display: block;
        color: inherit;
        text-decoration: none;
    }

    :global(code) {
        font-family: menlo, inconsolata, monospace;
        font-size: calc(1em - 2px);
        color: #555;
        background-color: #f0f0f0;
        padding: 0.2em 0.4em;
        border-radius: 2px;
    }

    @media (min-width: 400px) {
        :global(body) {
            font-size: 16px;
        }
    }
</style>

<Nav {segment}/>

<main>
    <slot></slot>
</main>