import isElement from './isElement'

/**
 * 判断元素是否为另一个的父级元素
 * 如果两个元素为同一个元素那么也返回true isParentElement(html, html) // true
 * @param parent 父级元素
 * @param child 子元素
 * @param selfParent 自己是否也算作自己的父级元素, 默认算{true}
 */
export const isParentElement = (parent: HTMLElement, child: HTMLElement, selfParent = true) => {
  if (!isElement(parent) || !isElement(child)) {
    return false
  }
  if (!selfParent) {
    child = child.parentElement
  }
  while (child !== null) {
    if (child === parent) {
      return true
    }
    child = child.parentElement
  }
  return false
}

export default isParentElement
