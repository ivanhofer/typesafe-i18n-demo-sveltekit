<script lang="ts">
	import { setLocale, locale } from '$i18n/i18n-svelte'
	import type { Locales } from '$i18n/i18n-types'
	import { locales } from '$i18n/i18n-util'

	const switchLocale = async (locale: Locales) => {
		// update store => loads new dictionary from server
		await setLocale(locale)
	}
</script>

<ul>
	{#each locales as l}
		<li role="button" class:active={l === $locale} on:click={() => switchLocale(l)}>
			{l}
		</li>
	{/each}
</ul>
