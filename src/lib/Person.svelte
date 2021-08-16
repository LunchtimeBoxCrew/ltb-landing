<script lang="ts">
	import type { PeopleType } from '../lib/images/people/ProfileImage.svelte';
	import ProfileImage from '../lib/images/people/ProfileImage.svelte';

	export let name: PeopleType;

	export let description: string;
</script>

<div id="wrapper">
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

<style lang="scss">
	@import '../styles/index.scss';
	#wrapper {
		height: 12rem;
		width: 100%;
		display: flex;
		flex-direction: row;
		margin-bottom: 1rem;
		overflow: hidden;
		border-radius: 1rem;
		background: rgb(230, 232, 233);
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
