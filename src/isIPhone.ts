import useragent from './useragent'

/**
 * 判断是不是iphone
 */
export const isIPhone = useragent && useragent.includes('iphone')

export default isIPhone
