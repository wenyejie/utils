import { once } from './common.js'

export const isSupportWebp = once(() => {
  const webpBase64 = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA='
  const image = new Image()
  return new Promise((resolve, reject) => {
    image.onload = () => {
      const result = image.width > 0 && image.height > 0
      if (result) {
        resolve()
      } else {
        reject()
      }
    }
    image.onerror = () => {
      reject()
    }
    image.src = webpBase64
  })
})

export default isSupportWebp
