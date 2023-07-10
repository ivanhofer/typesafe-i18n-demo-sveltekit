<script lang="ts">
	import { locale } from '$i18n/i18n-svelte'
	import LocaleSwitcher from './LocaleSwitcher.svelte'
</script>

<header>
	<a href="/{$locale}">
		<h1>typesafe-i18n</h1>
	</a>

	<LocaleSwitcher />
</header>
