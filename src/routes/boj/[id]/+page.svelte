<script lang="ts">
  import type { BojInfo } from '$lib/components/boj';
  import { BojInfoEmbed } from '$lib/components/boj';

  export let data: BojInfo;
</script>

<BojInfoEmbed id={data.id} />
