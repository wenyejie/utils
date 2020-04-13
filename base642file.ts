/**
 * base64 to file
 * @param base64 base64文件
 * @param filename 文件名称
 */
export const base642file = (base64: string, filename: string) => {
  const array: string[] = base64.split(',')
  const type = array[0].match(/:(.*?);/)[1]
  const decodedData = window.atob(array[1])
  let length = decodedData.length
  const uint8Array = new Uint8Array(length)
  while (length--) {
    uint8Array[length] = decodedData.charCodeAt(length)
  }
  return new File([uint8Array], filename + '.' + type.substring(6), { type })
}

export default base642file
