import isElement from './isElement'

/**
 * 判断元素是否为另一个的父级元素
 * @param parent 父级元素
 * @param child 子元素
 * @param selfParent 自己是否也算作自己的父级元素, 默认是{true}
 */
export const isParentElement = (parent: HTMLElement, child: HTMLElement, selfParent = true) => {
  if (!isElement(parent)) {
    console.error(`"${parent}" is not a HTMLElement`)
    return false
  }
  if (!isElement(child)) {
    console.error(`"${child}" is not a HTMLElement`)
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
