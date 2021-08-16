<script context="module" lang="ts">
	import * as content from '.';
</script>

<script lang="ts">
	export let file: string;
</script>

<div class="content-raw">
	<svelte:component this={content[file.toLowerCase()]} />
</div>

<style lang="scss">
	@import '../styles/index.scss';

	.content-raw {
		& :global(p) {
			margin: 1.3em 0;
		}
		& :global(h1) :global(h2) {
			margin: 2em 0;
		}
		& :global(a) {
			color: $green;
			text-decoration: none;

			&:hover {
				color: $font-primary;
			}
		}
	}
</style>
