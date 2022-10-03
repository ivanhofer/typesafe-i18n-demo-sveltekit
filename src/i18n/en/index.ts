import type { BaseTranslation } from '../i18n-types'

const en: BaseTranslation = {
	HI: 'Welcome to Svelte Fall Summit {year:number}',
	spectators: '{0} live spectator{{s}}',
	summit: {
		schedule: '{0:Date|simpleDate}',
	},
	log: `This log was called from '{fileName:string}'`
}

export default en
