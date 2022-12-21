import type { BaseTranslation } from '../i18n-types'

const en: BaseTranslation = {
	title: 'typesafe-i18n - Svelte Fall Summit 2021',
	HI: 'Welcome to Svelte Fall Summit {year:number}',
	spectators: '{0} live spectator{{s}}',
	summit: {
		schedule: '{0:Date|simpleDate}',
	},
	log: `This log was called from '{fileName:string}'`,
}

export default en
