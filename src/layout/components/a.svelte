<script lang="ts">
	export let href;
	export let target;

	console.log($$props);
	console.log(href, target);
</script>

<a {href} target="_blank"><slot /></a>

<style lang="scss">
	@import '../../styles';

	a {
		color: $green;
		text-decoration: none;
		&:hover {
			color: $font-primary;
		}
	}
</style>
