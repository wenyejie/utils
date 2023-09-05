import file2image from '@/file2image'

/**
 * 文件压缩选项
 */
export interface FileCompressOptions {
  // canvas背景颜色
  fileStyle?: string
  // 图片质量, 只对jpg/jpeg/webp生效
  quality?: number
  // 图片类型
  filetype?: string
  // 图片名称
  filename?: string
  // 图片最大宽度
  maxWidth?: number
  // 图片最大高度
  maxHeight?: number
  // 图片最大size, 暂不支持, 需要后续实现
  maxSize?: number
}

const DEFAULT_OPTIONS: FileCompressOptions = {
  maxWidth: 0,
  maxHeight: 0,
  maxSize: 0,
}

/**
 * 计算画图大小
 * @param image 图片
 * @param maxWidth 最大宽度
 * @param maxHeight 最大高度
 */
const calcDrawSize = (image: HTMLImageElement, maxWidth?: number, maxHeight?: number) => {
  const { naturalWidth, naturalHeight } = image
  const ratio = naturalWidth / naturalHeight
  let dw: number
  let dh: number

  if (ratio >= 1) {
    if (maxWidth > 0) {
      dw = Math.min(naturalWidth, maxWidth)
    } else {
      dw = naturalWidth
    }
    dh = dw / ratio
  } else {
    if (maxHeight > 0) {
      dh = Math.min(naturalHeight, maxHeight)
    } else {
      dh = naturalHeight
    }
    dw = dh * ratio
  }

  return {
    dw: Math.floor(dw),
    dh: Math.floor(dh),
    sw: naturalWidth,
    sh: naturalHeight,
  }
}

/**
 * 图片转画布
 * @param image 图片
 * @param maxWidth 最大宽度
 * @param maxHeight 最大高度
 * @param fileStyle 背景
 */
const image2canvas = (image: HTMLImageElement, maxWidth?: number, maxHeight?: number, fileStyle?: string) => {
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')
  const { dw, dh, sw, sh } = calcDrawSize(image, maxWidth, maxHeight)
  canvas.width = dw
  canvas.height = dh
  if (fileStyle) {
    context.fillStyle = fileStyle
    context.fillRect(0, 0, dw, dh)
  }
  context.drawImage(image, 0, 0, sw, sh, 0, 0, dw, dh)

  return canvas
}

/**
 * 图片压缩, PS: quality只对jpg/jpeg/webp生效
 * @param file 图片
 * @param options 选项
 */
export const imageCompress = (file: File, options?: FileCompressOptions): Promise<File> => {
  options = Object.assign({ ...DEFAULT_OPTIONS }, options)
  const image = file2image(file)
  document.body.appendChild(image)
  return new Promise((resolve, reject) => {
    image.onload = () => {
      const canvas = image2canvas(image, options.maxWidth, options.maxHeight, options.fileStyle)

      const type = options.filetype ?? file.type
      const name = options.filename ?? file.name

      document.body.appendChild(canvas)
      canvas.toBlob(
        blob => {
          if (blob) {
            if (blob.size > file.size) {
              resolve(file)
            } else {
              resolve(new File([blob], name, { type }))
            }
          } else {
            reject(new Error(`canvas toBlob return null`))
          }
        },
        type,
        options.quality,
      )
    }
    image.onerror = reject
  })
}

export default imageCompress
