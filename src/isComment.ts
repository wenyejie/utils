/**
 * 判断是否为注释
 * @param obj 对象
 */
export const isComment = (obj: unknown) => obj?.['nodeType'] === 8

export default isComment
