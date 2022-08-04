// @ts-check

import { defineConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'

export default defineConfig({
	plugins: [sveltekit()],
	server: { port: 3000 },
	preview: { port: 3000 },
})
