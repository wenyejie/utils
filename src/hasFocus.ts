/**
 * 判断元素是否拥有焦点
 * @param element 目标元素
 */
export const hasFocus = (element: Element) => {
  return document.hasFocus() && document.activeElement === element
}

