/**
 * 判断是否为元素
 * @param obj
 */
export const isElement = (obj: any) => (obj ? obj.nodeType === 1 : false)

export default isElement
