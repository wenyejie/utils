import inBrowser from './inBrowser'

/**
 * 获取浏览器的ua
 */
export const useragent = inBrowser && window.navigator.userAgent.toLocaleLowerCase()

export default useragent
