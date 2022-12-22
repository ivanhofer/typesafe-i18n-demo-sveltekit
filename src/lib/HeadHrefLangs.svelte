<script lang="ts">
	import { locales } from '$i18n/i18n-util'
	import { page } from '$app/stores'
	import { replaceLocaleInUrl } from '../utils'
</script>

{#each locales as l}
	<link rel="alternate" hreflang={l} href={`${replaceLocaleInUrl($page.url, l)}`} />
{/each}
