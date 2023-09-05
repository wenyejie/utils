/**
 * file or blob to url
 * @param file File | Blob
 */
export const file2url = (file: File) => {
  return URL.createObjectURL(file)
}

export default file2url
