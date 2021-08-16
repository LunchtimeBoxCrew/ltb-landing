<script lang="ts">
	import type { IconType } from './Icon.svelte';
	import Icon from './Icon.svelte';

	export let link: string | (() => string);
	export let style: 'dark' | 'light' = 'light';
	export let click: boolean = true;
	export let icon: IconType | null = null;

	function setHref() {
		this.href = typeof link === 'string' ? link : link();
	}
</script>

<a on:click={setHref} href="_blank" class:dark={style === 'dark'} class:click>
	<slot />
	{#if icon}
		<!-- THe 3px margin centers the icon a bit better -->
		<Icon
			name={icon}
			--margin="3px 0px 0px 10px"
			--fill={style === 'dark' ? 'white' : 'darkgray'}
		/>
	{/if}
</a>

<style lang="scss">
	@import '../styles/index.scss';

	a {
		all: unset;
		background-color: white;
		border: none;
		border-radius: 0.5rem;
		padding: 1rem 1.2rem;
		cursor: pointer;
		position: relative;
		max-width: 400px;
		min-width: var(--min-width, unset);
		margin: var(--margin);

		display: flex;
		align-items: center;
		justify-content: center;

		@media (max-width: 1024px) {
			padding: 0.7rem 1rem;
			font-size: 0.9rem;
		}

		&.dark {
			background-color: $green;
			:global(p) {
				color: white !important;
			}

			&.click::before {
				color: black;
			}
		}

		&.click {
			&::before {
				position: absolute;
				content: '"Klick"';
				top: -1.2rem;
				right: -1.2rem;
				color: white;
				z-index: 99;

				font-size: 1rem;
				transform: rotate(10deg);
				opacity: 0.6;
			}
		}

		&.dark.click::after {
			color: rgb(24, 24, 24);
		}
	}
</style>
