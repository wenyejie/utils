import { once } from './once'

/**
 * 判断浏览器是否支持webp
 */
export const isSupportWebp = once((): Promise<void> => {
  return new Promise((resolve, reject) => {
    const base64 = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA='
    const image = new Image()
    image.onload = () => {
      const result = image.width > 0 && image.height > 0
      if (result) {
        resolve()
      } else {
        reject()
      }
      image.remove()
    }
    image.onerror = () => {
      reject()
      image.remove()
    }
    image.src = base64
  })
})

