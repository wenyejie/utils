import useragent from './useragent'

/**
 * 判断是不是Android
 */
export const isAndroid = useragent && useragent.includes('android')

export default isAndroid
