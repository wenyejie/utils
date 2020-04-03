import isString from './isString'

/**
 * 通过url下载
 * @param url
 * @param filename
 */
export const downloadFile = (url: string, filename: string) => {
  if (!isString(url)) {
    throw new Error('参数错误')
  }
  const $download = document.createElement('a')
  $download.style.display = 'none'
  $download.href = url
  $download.setAttribute('download', filename)
  if ($download.download === undefined) {
    $download.setAttribute('target', '_blank')
  }
  document.body.appendChild($download)
  $download.click()
  document.body.removeChild($download)
}

export default downloadFile
