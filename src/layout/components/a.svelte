<script lang="ts">
	export let href;
	export let target;

	console.log($$props);
	console.log(href, target);
</script>

<a {href} target="_blank"><slot /></a>
