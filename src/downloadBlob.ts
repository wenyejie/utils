import downloadUrl from './downloadUrl'

/**
 * 下载blob文件
 * @param blob
 * @param filename
 */
export const downloadBlob = (blob: Blob, filename: string) => {
  if (window.navigator.msSaveBlob) {
    window.navigator.msSaveBlob(blob, filename)
    return
  }
  const url = window.URL.createObjectURL(blob)
  downloadUrl(url, filename)
  window.URL.revokeObjectURL(url)
}

export default downloadBlob
