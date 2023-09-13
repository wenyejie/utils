/**
 * 判断是否为文本
 * @param obj 对象
 */
export const isText = (obj: unknown) => obj?.['nodeType'] === 3

export default isText
