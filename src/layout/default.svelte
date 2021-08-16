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

<style lang="scss">
	@import '../styles/index.scss';
	.markdown-wrapper > :global(:first-child) {
		margin-top: 0px;
	}
	.markdown-wrapper > :global(:last-child) {
		margin-bottom: 0px;
	}

	.markdown-wrapper > :global(p) {
		margin: 1.3em 0;
	}

	.markdown-wrapper > :global(h1) :global(h2) {
		margin: 2em 0;
	}
</style>
