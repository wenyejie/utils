/**
 * 判断是否为注释
 * @param obj 对象
 */
export const isComment = (obj: any) => obj?.nodeType === 8

export default isComment
