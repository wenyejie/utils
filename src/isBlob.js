import toRawType from './toRawType'

export const isBlob = obj => {
  return toRawType(obj) === 'blob'
}

export default isBlob
