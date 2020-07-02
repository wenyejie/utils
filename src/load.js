import isFunction from './isFunction'
import isObject from './isObject'
import hasOwn from './hasOwn'
/**
 * 载入script
 * @param tagName
 * @param url
 * @param options
 */

export const load = (tagName, url, options) => {
  options = Object.assign(
    {
      before: null,
      mode: 'src',
      attrs: null
    },
    options
  )
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
