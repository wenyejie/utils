import useragent from './useragent'

/**
 * 判断是不是Android
 */
const isAndroid = useragent && useragent.includes('android')

export default isAndroid
