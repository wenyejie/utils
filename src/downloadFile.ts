import { isString } from './isString'

/**
 * 通过url下载
 * PS: 只能下载同源的链接, 如果不是同源的文件请使用downloadBlob方法
 * @param url
 * @param filename
 */
export const downloadFile = (url: string, filename = '') => {
  if (!isString(url)) {
    console.error(`"${ url }" is not a string`)
    return
  }
  const $download = document.createElement('a')
  $download.style.display = 'none'
  $download.href = url
  $download.setAttribute('download', filename)
  // 当不允许下载或者下载失败时, 在新页面打开, 而不是当前页面
  if (!$download.download) {
    $download.setAttribute('target', '_blank')
  }
  document.body.appendChild($download)
  $download.click()
  document.body.removeChild($download)
}

