<script context="module" lang="ts">
	import * as content from './';
</script>

<script lang="ts">
	export let file: string;
</script>

<div class="content-raw">
	{@html content[file.toLowerCase()]}
</div>

<style lang="scss">
	.content-raw {
		& :global(p) {
			margin: 1.3em 0;
		}
		& :global(h1) :global(h2) {
			margin: 2em 0;
		}
	}
</style>
