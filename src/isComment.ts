import { DOMNodeTypes } from '../types'
const isComment = obj => (obj ? obj.nodeType === DOMNodeTypes.COMMENT : false)

export default isComment
