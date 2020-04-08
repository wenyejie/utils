import useragent from './useragent'

/**
 * 判断是不是IOS
 */
export const isIOS = /iphone|ipad|ipod|ios/.test(useragent())

export default isIOS
