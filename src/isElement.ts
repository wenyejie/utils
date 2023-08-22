/**
 * 判断是否为元素
 * @param obj
 */
export const isElement = (obj: HTMLElement) => (obj ? obj.nodeType === 1 : false)

export default isElement
