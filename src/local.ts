import globalThis from './globalThis'
import storage from '@/storage'

/**
 *
 */
export const local = storage(globalThis?.localStorage)

export default local
