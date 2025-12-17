import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	kit: {
		adapter: adapter({
			fallback: 'index.html'
		})
	},
	preprocess: vitePreprocess()
};

export default config;
