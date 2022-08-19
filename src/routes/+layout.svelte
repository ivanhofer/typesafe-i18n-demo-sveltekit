<script context="module" lang="ts">
	throw new Error("@migration task: Check code was safely removed (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292722)");

	// import type { Load } from '@sveltejs/kit'
	// import type { Locales } from '$i18n/i18n-types'
	// import { replaceLocaleInUrl } from '../utils'
	// import { baseLocale, locales } from '$i18n/i18n-util'
	// import { loadLocaleAsync } from '$i18n/i18n-util.async'

	// type LoadParams = {
	// 	lang?: Locales
	// }

	// export const load: Load<LoadParams> = async ({ url, session, params }) => {
	// 	const lang = params.lang

	// 	// redirect to preferred language if user comes from page root
	// 	if (!lang) {
	// 		return {
	// 			status: 302,
	// 			redirect: `/${session.locale}`,
	// 		}
	// 	}

	// 	// redirect to base locale if language is not present
	// 	if (!locales.includes(lang)) {
	// 		return {
	// 			status: 302,
	// 			redirect: replaceLocaleInUrl(url.pathname, baseLocale),
	// 		}
	// 	}

	// 	// delete session locale since we don't need it to be sent to the client
	// 	delete session.locale

	// 	await loadLocaleAsync(lang)

	// 	return { props: { locale: lang } }
	// }
</script>

<script lang="ts">
	throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

	import Header from '$lib/Header.svelte'
	import { setLocale } from '$i18n/i18n-svelte'

	export let locale: Locales
	setLocale(locale)
</script>

<Header />

<main>
	<slot />
</main>

<style lang="scss" global>
	@import '../styles/global.scss';
</style>
