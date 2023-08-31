import isParentElement from './isParentElement'

type RemoveClickOutsideListener = () => void

/**
 * 点击元素外部执行回调
 * @param element 元素
 * @param callback 回调
 * @param once 只执行一次
 */
export const clickOutside = (element: HTMLElement, callback: AnyFn, once?: boolean): RemoveClickOutsideListener => {
  const docClick = (event: PointerEvent) => {
    if (isParentElement(element, <HTMLElement>event?.target)) {
      return
    }
    callback()
  }
  document.addEventListener('click', docClick, { once })

  return () => {
    document.removeEventListener('click', docClick)
  }
}

export default clickOutside
