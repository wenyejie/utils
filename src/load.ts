import isFunction from './isFunction'
import isObject from './isObject'
import hasOwn from './hasOwn'

interface LoadOptions {
  before?: (...rest: any[]) => void,
  mode?: string,
  attrs?: Record<string, any>
}

const DEFAULT_OPTIONS:LoadOptions = {
  before: null,
  mode: 'src',
  attrs: null
}


/**
 * 载入script
 * @param tagName
 * @param url
 * @param options
 */
export const load = (tagName: keyof HTMLElementTagNameMap, url: string, options?:LoadOptions):Promise<HTMLElement> => {
  options = Object.assign( {}, DEFAULT_OPTIONS, options)
  return new Promise((resolve, reject) => {
    const $element = document.createElement(tagName)
    const $body = document.body

    $element[options.mode] = url

    const attrs = options.attrs
    if (isObject(attrs)) {
      for (let key in attrs) {
        if (hasOwn(attrs, key)) {
          $element.setAttribute(key, attrs[key])
        }
      }
    }
    $element.onload = () => {
      resolve($element)
      $body.removeChild($element)
    }
    $element.onerror = () => {
      reject($element)
      $body.removeChild($element)
    }
    isFunction(options.before) && options.before($element)
    $body.appendChild($element)
  })
}

export default load
