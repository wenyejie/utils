import useragent from './useragent'

/**
 * 判断是不是EDGE浏览器
 */
export const isEdge = () => useragent().includes('edge')

export default isEdge
