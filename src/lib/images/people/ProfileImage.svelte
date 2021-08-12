<script lang="ts">
	import * as PeopleImages from './';
	export let name: string;
</script>

<img srcset={PeopleImages[name.toLowerCase()]} type="image/webp" alt={`person ${name}`} />
