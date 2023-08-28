/**
 * File转base64
 * @param file 文件对象
 */
export const file2base64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      resolve(<string>reader.result)
    }
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}

export default file2base64
