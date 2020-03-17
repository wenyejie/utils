import useragent from './useragent'

/**
 * 判断是不是I09E浏览器
 */
const isIE9 = useragent && useragent.includes('msie 9.0')

export default isIE9
