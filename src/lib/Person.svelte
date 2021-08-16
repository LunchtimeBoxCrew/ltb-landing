<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { PeopleType } from '../lib/images/people/ProfileImage.svelte';
	import ProfileImage from '../lib/images/people/ProfileImage.svelte';

	export let name: PeopleType;

	export let description: string;
	export let details: string = description;

	let showDetails = false;
</script>

<div
	id="wrapper"
	on:click={() => {
		showDetails = true;
	}}
>
	<ProfileImage {name} />
	<div id="infobox" class="ltbgreen white">
		<h2 class="xl">
			{name},
		</h2>
		<p class="m">
			{description}
		</p>
	</div>
</div>
{#if showDetails}
	<div
		class="modal-wrapper"
		transition:fade={{ duration: 100 }}
		on:click={() => {
			showDetails = false;
		}}
	>
		<div class="modal">
			<div class="left">
				<ProfileImage {name} />
			</div>
			<div class="infobox">
				<h2 class="xl">
					{name},
				</h2>
				<p class="m">
					{details}
				</p>
			</div>
			<button
				class="close"
				on:click={() => {
					showDetails = false;
				}}
			>
				&#x2715;
			</button>
		</div>
	</div>
{/if}

<style lang="scss">
	@import '../styles/index.scss';

	.modal-wrapper {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 15px;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 99;
		cursor: pointer;
		.modal {
			position: relative;
			display: flex;
			border-radius: 1rem;
			background: rgb(230, 232, 233);
			width: 100%;
			max-width: 1024px;
			min-height: 450px;
			cursor: auto;
			/* box-shadow: 1px 4px 35px -4px rgba(0, 0, 0, 0.05); */
			.close {
				all: unset;
				position: absolute;
				display: block;
				top: 15px;
				right: 20px;
				cursor: pointer;
				font-size: 1.3rem;
			}

			.left {
				display: flex;
				align-items: flex-end;
				width: 50%;
				overflow: hidden;
				border-radius: 1rem;
			}
			:global(img) {
				display: block;
				width: 100%;
				mix-blend-mode: multiply;
			}
			.infobox {
				width: 100%;
				height: 100%;
				min-height: 20rem;
				margin: 25px;
				border-radius: 13px;
				padding: 2.3rem 1.3rem;
				background: $green;
				color: white;
				margin: 5% 10% 5% 0;
			}
		}
	}
	#wrapper {
		height: 12rem;
		width: 100%;
		display: flex;
		flex-direction: row;
		margin-bottom: 1rem;
		overflow: hidden;
		border: 1px solid #e1e3e6;
		border-radius: 1rem;
		background: rgb(230, 232, 233);
		cursor: pointer;
	}
	#wrapper :global(img) {
		display: block;
		height: 100%;
		width: 100%;

		overflow-y: hidden;
		object-fit: cover;

		position: relative;
		/* right: -4rem; */
		mix-blend-mode: multiply;
	}

	#infobox {
		width: 66%;
		margin: 25px;
		border-radius: 13px;
		padding: 1.3rem;
	}
	@media (min-width: 580px) {
		#wrapper {
			height: 16rem;
			width: 28rem;
			margin: 1rem;
			object-position: 50% 50%;
		}
	}

	/*
        Definitions
    */
	div.ltbgreen {
		background: $green;
	}
	.xl {
		font-size: 2rem;
		margin-bottom: 0.5rem;
	}
	.m {
		font-size: 0.9rem;
		color: rgb(221, 221, 221);
	}
	.white {
		color: white;
	}
</style>
