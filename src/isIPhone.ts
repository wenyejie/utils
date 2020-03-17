import useragent from './useragent'

/**
 * 判断是不是iphone
 */
const isIPhone = useragent && useragent.includes('iphone')

export default isIPhone
