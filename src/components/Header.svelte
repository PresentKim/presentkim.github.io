<script>
  import Logo from './Logo.svelte';
</script>

<style>
    header {
        display: flex;
        justify-content: space-between;
        margin: 0 0;
        padding: 0.5rem 0 0.5rem 0.5rem;
        border-bottom: 1px solid var(--border-color);

        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }

    #home-button {
        display: block;
        text-align: center;
    }
</style>

<header>
    <div id="home-button">
        <a href="/">
            <Logo size="32"/>
        </a>
    </div>
</header>
