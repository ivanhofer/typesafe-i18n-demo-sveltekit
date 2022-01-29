<script lang="ts">
	import { page } from '$app/stores'
	import { setLocale, locale } from '$i18n/i18n-svelte'
	import type { Locales } from '$i18n/i18n-types'
	import { locales } from '$i18n/i18n-util'
	import { loadLocaleAsync } from '$i18n/i18n-util.async'
	import { replaceLocaleInUrl } from '../utils'

	const switchLocale = async (locale: Locales) => {
		// load new dictionary from server
		await loadLocaleAsync(locale)

		// select locale
		setLocale(locale)

		// update url to reflect locale changes
		history.pushState({ locale }, '', replaceLocaleInUrl(location.pathname, locale))

		// update `lang` attribute
		document.querySelector('html').setAttribute('lang', locale)
	}

	// update locale when navigating via browser back/forward buttons
	const handlePopStateEvent = async ({ state }: PopStateEvent) => state.locale && (await setLocale(state.locale))

	// update locale when page store changes
	$: setLocale($page.params.lang as Locales)
</script>

<svelte:window on:popstate={handlePopStateEvent} />

<ul>
	{#each locales as l}
		<li>
			<button type="button" class:active={l === $locale} on:click={() => switchLocale(l)}>
				{l}
			</button>
		</li>
	{/each}
</ul>
