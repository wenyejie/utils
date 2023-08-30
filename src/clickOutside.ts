import isElement from './isElement'
import isFunction from './isFunction'
import isParentElement from './isParentElement'
import noop from './noop'

type RemoveEventListener = () => void

/**
 * 点击元素外部执行回调
 * @param element 元素
 * @param callback 回调
 */
export const clickOutside = (element: HTMLElement, callback: AnyFn): RemoveEventListener => {
  if (!isElement(element) || !isFunction(callback)) {
    return noop
  }

  const docClick = (event: PointerEvent) => {
    if (isParentElement(element, <HTMLElement>event?.target)) {
      return
    }
    callback()
  }
  document.addEventListener('click', docClick)

  return () => {
    document.removeEventListener('click', docClick)
  }
}

export default clickOutside
