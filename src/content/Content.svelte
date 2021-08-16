<script context="module" lang="ts">
	import * as content from '.';

	export type ContentType = keyof typeof content;
</script>

<script lang="ts">
	export let file: ContentType;
</script>

<svelte:component this={content[file]} />
