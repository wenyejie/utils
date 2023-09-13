export interface LoadOptions {
  before?: AnyFn
  mode?: string
  attrs?: Record<string, unknown>
}

const DEFAULT_OPTIONS: LoadOptions = {
  before: _ => _,
  mode: 'src',
  attrs: {},
}

/**
 * 载入script
 * @param tagName 标签名称
 * @param url url地址
 * @param options 选项
 */
export const load = (
  tagName: keyof HTMLElementTagNameMap,
  url: string,
  options?: LoadOptions,
): Promise<HTMLElement> => {
  options = Object.assign({}, DEFAULT_OPTIONS, options)
  return new Promise((resolve, reject) => {
    const $element = document.createElement(tagName)
    const $body = document.body

    const { mode, attrs, before } = options

    $element[mode] = url

    for (const [key, value] of Object.entries(attrs)) {
      $element.setAttribute(key, <string>value)
    }
    $element.onload = () => {
      resolve($element)
      $body.removeChild($element)
    }
    $element.onerror = () => {
      reject($element)
      $body.removeChild($element)
    }
    before($element)
    $body.appendChild($element)
  })
}

export default load
