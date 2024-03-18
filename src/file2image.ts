import file2url from './file2url'

/**
 * file对象转图片
 * @param file
 */
export const file2image = (file: File) => {
  const image = document.createElement('img')
  image.src = file2url(file)
  return image
}

export default file2image
