<script>
  let innerWidth = 0;
  let innerHeight = 0;

  $: vmin = Math.min(innerWidth, innerHeight) / 100;
</script>

<style>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    p {
        font-size: 1em;
    }
</style>

<svelte:window bind:innerWidth={innerWidth} bind:innerHeight={innerHeight}/>

<div class="container"
     style:font-size=" {vmin * 2}px">

    <h1>PresentKim</h1>
    <p>My first paragraph.</p>

    <ul>
        <li><a href="posts">Posts</a></li>
    </ul>
</div>