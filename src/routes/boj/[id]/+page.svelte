<script lang="ts">
  import type { BojInfo } from '$lib/utils/boj';
  import BojInfoEmbed from '$lib/components/BojInfoEmbed.svelte';

  export let data: BojInfo;
</script>

<BojInfoEmbed id={data.id} />
