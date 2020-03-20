import { DOMNodeTypes } from '../types/index'
export const isElement = (obj: any) => (obj ? obj.nodeType === DOMNodeTypes.ELEMENT : false)

export default isElement
