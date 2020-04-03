import downloadFile from './downloadFile'
import isBlob from './isBlob'
import suffix from './suffix'

/**
 * 下载blob文件
 * @param blob
 * @param filename
 */
export const downloadBlob = (blob: Blob, filename: string) => {
  if (!isBlob(blob)) {
    throw new Error('参数错误: blob不是Blob类型')
  }
  if (!suffix(filename)) {
    filename = filename + '.' + blob.type.replace(/image\//, '')
    console.warn('参数错误: filename没有后缀名')
  }
  if (window.navigator.msSaveBlob) {
    window.navigator.msSaveBlob(blob, filename)
    return
  }
  const url = window.URL.createObjectURL(blob)
  downloadFile(url, filename)
  window.URL.revokeObjectURL(url)
}

export default downloadBlob
