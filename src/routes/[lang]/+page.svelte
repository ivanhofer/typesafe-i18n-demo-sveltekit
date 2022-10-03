<script lang="ts">
	import LL from '$i18n/i18n-svelte'
	import { onMount } from 'svelte'

	console.info($LL.log({ fileName: '+page.svelte' }))

	let spectators = 0

	onMount(() => {
		const interval = setInterval(updateSpectatorCount, 2_000)

		return () => clearInterval(interval)
	})

	const updateSpectatorCount = () => {
		// no real data, just a simulation ;)
		spectators = spectators * 2 + 1

		if (spectators > 100_000) {
			spectators = 0
		}
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
