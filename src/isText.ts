import { DOMNodeTypes } from '../types/index'
export const isText = (obj: any) => (obj ? obj.nodeType === DOMNodeTypes.TEXT : false)

export default isText
