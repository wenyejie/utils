import toRawType from './toRawType.js'

export const isBlob = obj => {
  return toRawType(obj) === 'blob'
}

export default isBlob
