import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { imagetools } from 'vite-imagetools';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapter(),
		vite: {
			plugins: [imagetools({ force: true })]
		},
		paths: {
			assets: '/ltb-landing',
			base: '/ltb-landing'
		},
		vite:{
			hmr:{
				port: 3000
			}
		}
	}
};

export default config;
