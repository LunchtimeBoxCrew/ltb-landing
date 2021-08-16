/// <reference types="@sveltejs/kit" />

declare module '*srcset' {
	const content: string;
	export default content;
}

declare module '*.md' {
	import { SvelteComponent } from 'svelte';

	const component: SvelteComponent;
	// Modify below per your usage
	export default component;
}
