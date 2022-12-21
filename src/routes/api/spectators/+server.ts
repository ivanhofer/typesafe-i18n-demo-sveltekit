import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'

export const GET: RequestHandler = async ({ url }) => {
	// no real data, just a simulation ;)
	const oldSpectators = Number(url.searchParams.get('oldSpectators') ?? '0')
	let spectators = oldSpectators * 2 + 1
	if (spectators > 100_000) {
		spectators = 0
	}
	return json({ spectators })
}
