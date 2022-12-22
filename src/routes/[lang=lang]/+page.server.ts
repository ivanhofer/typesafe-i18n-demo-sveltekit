import type { PageServerLoad } from './$types'

export const load: PageServerLoad = ({ locals: { LL } }) => {
	console.info(LL.log({ fileName: '+page.server.ts' }))
}