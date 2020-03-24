import useragent from './useragent'

/**
 * 判断是不是IOS
 */
export const isIOS = useragent && /iphone|ipad|ipod|ios/.test(useragent)

export default isIOS
