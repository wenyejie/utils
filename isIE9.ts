import useragent from './useragent'

/**
 * 判断是不是I09E浏览器
 */
export const isIE9 = () => useragent().includes('msie 9.0')

export default isIE9
