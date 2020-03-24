import toRawType from './toRawType'

export const isRegExp = (obj: any) => toRawType(obj) === 'regexp'

export default isRegExp
