/**
 * 判断是否为注释
 * @param obj
 */
export const isComment = (obj:any) => (obj ? obj.nodeType === 8 : false)

export default isComment
