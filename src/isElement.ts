import { DOMNodeTypes } from '../types'
const isElement = obj => (obj ? obj.nodeType === DOMNodeTypes.ELEMENT : false)

export default isElement
