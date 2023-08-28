import globalThis from './globalThis'
import storage from './storage'

export const session = storage(globalThis?.sessionStorage)

export default session
