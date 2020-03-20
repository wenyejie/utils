import { DOMNodeTypes } from '../types/index'
export const isComment = (obj: any) => (obj ? obj.nodeType === DOMNodeTypes.COMMENT : false)

export default isComment
