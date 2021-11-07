<script context="module" lang="ts">
	import { initI18n } from '$i18n/i18n-svelte'
	import type { Load } from '@sveltejs/kit'

	export const load: Load = async ({ page, session }) => {
		await initI18n(session.locale)

		// redirect to preferred language if user comes from page root
		if (!page.params.lang) {
			return {
				status: 302,
				redirect: `/${session.locale}`,
			}
		}

		return {}
	}
</script>

<script lang="ts">
	import Header from '$lib/Header.svelte'
</script>

<Header />

<main>
	<slot />
</main>

<style lang="scss" global>
	@import '../styles/global.scss';
</style>
