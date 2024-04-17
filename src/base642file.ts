import { globalThis } from './globalThis'
import { hasSuffix } from './hasSuffix'

/**
 * base64 to file
 * @param base64 base64文件
 * @param filename 文件名称
 */
export const base642file = (base64: string, filename: string) => {
  const array = base64.split(',')
  const type = array[0].match(/:(.*?);/)[1]
  const decodedData = globalThis.atob(array[1])
  let length = decodedData.length
  const uint8Array = new Uint8Array(length)
  while (length--) {
    uint8Array[length] = decodedData.charCodeAt(length)
  }
  filename = hasSuffix(filename) ? filename : `${filename}.${type.substring(6)}`
  return new File([uint8Array], filename, { type })
}

