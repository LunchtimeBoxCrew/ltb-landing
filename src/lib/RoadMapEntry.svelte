<script lang="ts">
	import { slide } from 'svelte/transition';
	export let name: string;
	export let date: string;
	export let description: string;

	let showDesc = false;
	function switchDesc() {
		console.log('desc was ' + showDesc);
		showDesc ? (showDesc = false) : (showDesc = true);
	}
</script>

<div id="entry" on:click={switchDesc}>
	<div id="wrapper">
		<slot />
		<div id="header">
			<h1 id="heading">{name}</h1>
			<p id="date">{date}</p>
		</div>
	</div>
	{#if showDesc}
		<div transition:slide>
			<p id="desc">{description}</p>
		</div>
	{/if}
</div>

<style>
	#entry {
		border-radius: 1rem;
		cursor: pointer;
		width: 50%;
		background-color: #f8f8f8;
		margin-bottom: 4rem;
	}
	#wrapper {
		position: relative;
		overflow: hidden;
		height: 8rem;
		border-radius: 1rem;
	}
	#header {
		position: absolute;
		display: flex;
		flex-direction: row;
		width: 100%;
		justify-content: space-between;
		top: 0;
		left: 0;
	}
	#wrapper :global(img) {
		width: 100%;
	}
	#heading {
		margin: 1rem;
		font-weight: 900;
		color: white;
	}
	#date {
		margin: 1rem;
		font-size: 2rem;
		color: white;
	}
	#desc {
		margin: 1rem;
	}
</style>
