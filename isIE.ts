import useragent from './useragent'

/**
 * 判断是不是IE浏览器
 */
export const isIE = /msie|trident/.test(useragent())

export default isIE
