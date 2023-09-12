/**
 * 判断是否为元素
 * @param obj 对象
 */
export const isElement = (obj: unknown) => obj?.['nodeType'] === 1

export default isElement
