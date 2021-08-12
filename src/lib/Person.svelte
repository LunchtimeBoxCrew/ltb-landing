<script lang="ts">
	import ProfileImage from '../lib/images/people/ProfileImage.svelte';

	export let name: string;
	export let description: string;
</script>

<div id="wrapper">
	<ProfileImage name={name} />
	<div id="infobox" class="ltbgreen white">
		<h2 class="xl">
			{name}
		</h2>
		<p class="m">
			{description}
		</p>
	</div>
</div>

<style lang='scss'>
    @import '../styles/index.scss';
	#wrapper {
		height: 12rem;
		width: 100%;
		display: flex;
		flex-direction: row;
		margin-bottom: 1rem;
		overflow: hidden;
		border-radius: 1rem;

	}
	#wrapper :global(img) {
		display: block;
		height: 100%;
		width: 100%;

		overflow-y: hidden;
		object-fit: cover;

		position: relative;
		right: -50px;
		&:after {
			content: 'I want to be a png';
		}
	}

	#wrapper :global(div) {
		height: 100%;
	}
	#infobox {
		width: 66%;
		padding: 1rem;
	}
	@media (min-width: 580px) {
		#wrapper {
			height: 16rem;
			width: 32rem;
			margin: 1rem;
			border: 1rem 0 0 1rem;
			object-position: 50% 50%;
		}
		#infobox {
			border-radius: 0rem 1rem 1rem 0rem;
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
    }
    .m {
        font-size: 1rem;
    }
    .white {
        color: white;
    }

</style>
