<script lang="ts">
	import Header from '$lib/Header.svelte'
	import { setLocale } from '$i18n/i18n-svelte'
	import type { LayoutData } from './$types'

	export let data: LayoutData

	setLocale(data.locale)
</script>

<Header />

<main>
	<slot />
</main>

<style lang="scss" global>
	@import '../styles/global.scss';
</style>
