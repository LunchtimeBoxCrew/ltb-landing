import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { imagetools } from 'vite-imagetools';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess(),
		mdsvex({
			extension: '.md',
			layout: { _: './src/layout/default.svelte' }
		})
	],

	extensions: ['.svelte', '.md'],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapter(),
		vite: {
			hmr: {
				port: 3000
			},
			plugins: [imagetools({ force: true })]
		}
		// paths: {
		// 	assets: '/ltb-landing',
		// 	base: '/ltb-landing'
		// }
	}
};

export default config;
