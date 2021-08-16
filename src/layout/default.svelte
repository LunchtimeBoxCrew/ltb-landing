<script context="module">
	import { a } from './components';
	export { a };
</script>

<script lang="ts">
	export let title;
</script>

{#if title}
	<h3>{title}</h3>
{/if}

<div class="markdown-wrapper">
	<slot />
</div>

<style>
	.markdown-wrapper > :global(:first-child) {
		margin-top: 0px;
	}
	.markdown-wrapper > :global(:last-child) {
		margin-bottom: 0px;
	}
</style>
