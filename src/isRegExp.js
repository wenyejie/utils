import toRawType from './toRawType'

export const isRegExp = obj => toRawType(obj) === 'regexp'

export default isRegExp
