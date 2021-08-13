<script context="module" lang="ts">
	import * as PeopleImages from '.';
	export type PeopleType = keyof typeof PeopleImages;
</script>

<script lang="ts">
	export let name: PeopleType;
</script>

<img srcset={PeopleImages[name.toLowerCase()]} type="image/webp" alt={`person ${name}`} />
