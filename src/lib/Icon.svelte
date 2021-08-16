<script context="module" lang="ts">
	import * as icons from './images/icons';
	export type IconType = keyof typeof icons;
</script>

<script lang="ts">
	export let name: IconType;
</script>

<span>
	{@html icons[name]}
</span>

<style lang="scss">
	span {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: var(--margin);
	}
	span > :global(svg > *) {
		fill: var(--fill);
	}

	span > :global(svg) {
		height: calc(24px * var(--scale, 1));
		width: calc(24px * var(--scale, 1));
	}
</style>
