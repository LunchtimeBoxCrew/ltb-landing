<script lang="ts">
	export let title;
</script>

{#if title}
	<h3>{title}</h3>
{/if}

<slot />
