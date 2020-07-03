import toRawType from './toRawType.js'

export const isRegExp = obj => toRawType(obj) === 'regexp'

export default isRegExp
