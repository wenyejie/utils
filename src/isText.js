/**
 * 判断是否为文本
 * @param obj
 */
export const isText = obj => (obj ? obj.nodeType === 3 : false)

export default isText
