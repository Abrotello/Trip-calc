import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			fallback: '404.html',
			strict: true
		}),
		paths: {
			base: process.argv.includes('dev') ? '' : '/Trip-calc'
		}
	}
});