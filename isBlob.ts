import toRawType from './toRawType'

export const isBlob = (obj: any) => {
  return toRawType(obj) === 'blob'
}

export default isBlob
