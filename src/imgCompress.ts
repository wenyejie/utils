import file2base64 from './file2base64'
import load from './load'

const createImg = (url: string) => {
  return load('img', url) as Promise<HTMLImageElement>
}

export const file2img = async (file: File) => {
  const base64 = await file2base64(file)
  return await createImg(base64)
}

interface CreateCanvasResult {
  context: CanvasRenderingContext2D,
  $canvas: HTMLCanvasElement
}

interface ImgCompressOptions {
  noCompressIfLarger?: boolean, // 如果发现压缩后文件大小比原来还大，则使用原图
  maxWidth?: number, // 最大宽度, 默认1024
  maxHeight?: number, // 最大高度, 默认1024
  fillStyle?: string, // 填充底色, 默认透明
  quality?: number // 压缩之后的质量, 不压缩为1, 默认0.75
}

const DEFAULT_OPTIONS:ImgCompressOptions = {
  noCompressIfLarger: true,
  maxWidth: 1024,
  maxHeight: 1024,
  fillStyle: 'rgba(255, 255, 255, 0)',
  quality: 0.75
}

export const createCanvas = (options:ImgCompressOptions):Promise<CreateCanvasResult> => {
  return new Promise(resolve => {
    const $canvas = document.createElement('canvas')
    const context = $canvas.getContext('2d')

    context.fillStyle = options.fillStyle
    context.fillRect(0, 0, $canvas.width, $canvas.height)

    resolve({ context, $canvas })
  })
}
export const calcDrawSize = ($img:HTMLImageElement, options:ImgCompressOptions) => {
  const proportion = $img.naturalWidth / $img.naturalHeight
  let dw: number
  let dh: number
  let dx = 0
  let dy = 0
  let sx = 0
  let sy = 0
  let sw = $img.naturalWidth
  let sh = $img.naturalHeight
  if (proportion >= 1) {
    if (options.maxWidth > 0) {
      dw = $img.naturalWidth > options.maxWidth ? options.maxWidth : $img.naturalWidth
    } else {
      dw = $img.naturalWidth
    }
    dh = dw / proportion
  } else {
    if (options.maxHeight > 0) {
      dh = $img.naturalHeight > options.maxHeight ? options.maxHeight : $img.naturalHeight
    } else {
      dh = $img.naturalHeight
    }
    dw = dh * proportion
  }
  return { dw, dh, dx, dy, sx, sy, sw, sh }
}
export const canvas2file = ($canvas:HTMLCanvasElement, file:File, options:ImgCompressOptions):Promise<File> => {
  return new Promise(resolve => {
    $canvas.toBlob(
      blob => {
        resolve(new File([blob], file.name, { type: file.type }))
      },
      file.type,
      options.quality
    )
  })
}

/**
 * 图片压缩: 利用canvas对图片进行压缩
 * @param file
 * @param options
 */
const imgCompress = async (file:File, options:ImgCompressOptions) => {
  options = Object.assign(
    { ...DEFAULT_OPTIONS },
    options
  )
  const $img = await file2img(file)
  const { context, $canvas } = await createCanvas(options)
  // 如果低端版本不支持toBlob则无法使用图片压缩功能直接返回原图
  // 详见: https://caniuse.com/#feat=mdn-api_htmlcanvaselement_toblob
  if (!$canvas.toBlob) {
    return file
  }
  const { dw, dh, dx, dy, sx, sy, sw, sh } = calcDrawSize($img, options)
  $canvas.width = dw
  $canvas.height = dh
  context.drawImage($img, sx, sy, sw, sh, dx, dy, dw, dh)

  const compressFile = await canvas2file($canvas, file, options)

  // 如果压缩之后质量没有减少, 反而变大了, 则返回原图, 这样做是因为图片转化成base64之后质量会变大,
  if ((options.noCompressIfLarger && file.size <= compressFile.size) || compressFile.size < 1024) {
    return file
  }

  return compressFile
}

export default imgCompress
