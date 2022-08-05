// @ts-check

import preprocess from 'svelte-preprocess'
import vercel from '@sveltejs/adapter-vercel'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),

	kit: {
		adapter: vercel(),
		alias: {
			$i18n: 'src/i18n',
		},
	},
}

export default config
