import { DOMNodeTypes } from '../types'
const isText = obj => (obj ? obj.nodeType === DOMNodeTypes.TEXT : false)

export default isText
