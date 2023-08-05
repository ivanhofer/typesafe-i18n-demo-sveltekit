import type { BaseTranslation } from '../i18n-types'

const ar = {
	title: 'typesafe-i18n - قمة Svelte {year:number}',
	welcome: 'مرحبًا بك في قمة Svelte الخريفية {year:number}',
	spectators: '{0} مشاهد مباشر',
	summit: {
		schedule: '{0:Date|simpleDate}',
	},
	log: `تم استدعاء هذا السجل من '{fileName:string}'`,
} satisfies BaseTranslation

export default ar
