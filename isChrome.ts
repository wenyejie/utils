import useragent from './useragent'
import isEdge from './isEdge'

/**
 * 判断是不是ipad
 */
export const isChrome = () => /chrome\/\d+/.test(useragent()) && !isEdge()

export default isChrome
