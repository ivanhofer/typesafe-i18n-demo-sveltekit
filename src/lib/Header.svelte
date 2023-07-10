<script lang="ts">
	import { base } from '$app/paths'
	import { locale } from '$i18n/i18n-svelte'
	import LocaleSwitcher from './LocaleSwitcher.svelte'
</script>

<header>
	<a href="{base}/{$locale}">
		<h1>typesafe-i18n</h1>
	</a>

	<LocaleSwitcher />
</header>
