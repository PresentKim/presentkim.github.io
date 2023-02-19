<script lang="ts">
  import type { BojProblemData } from '$lib/utils/boj';
  import BojProblem from '$lib/components/BojProblem.svelte';

  export let data: BojProblemData;
</script>

<BojProblem id={data.id} />
