import useragent from './useragent'

/**
 * 判断是不是ipad
 */
export const isIPad = useragent && useragent.includes('ipad')

export default isIPad