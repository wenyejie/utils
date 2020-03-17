import useragent from './useragent'

/**
 * 判断是不是EDGE浏览器
 */
const isEdge = useragent && useragent.includes('edge')

export default isEdge
