<script lang="ts">
	import LL from '$i18n/i18n-svelte'
	import { onMount } from 'svelte'

	console.info($LL.log({ fileName: '+page.svelte' }))

	let spectators = 0

	onMount(() => {
		const interval = setInterval(async () => {
			spectators = await updateSpectatorCount(spectators)
		}, 2_000)

		return () => clearInterval(interval)
	})

	const updateSpectatorCount = async (spectators: number) => {
		const response = await fetch(
			'/api/spectators?' + new URLSearchParams({ oldSpectators: spectators.toString() }).toString()
		)
		const result = await response.json()
		return result.spectators
	}

	const day = new Date('2021-11-20')
</script>

<h2>
	{$LL.HI({ year: 2021 })}
</h2>

<h3>
	{$LL.summit.schedule(day)}
</h3>

<div class="spectators">
	{$LL.spectators(spectators)}
</div>
