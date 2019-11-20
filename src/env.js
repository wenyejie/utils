export const inBrowser = typeof window !== 'undefined'

export const ua = inBrowser && window.navigator.userAgent.toLowerCase()

export const isIE = ua && /msie|trident/.test(ua)

export const isIE9 = ua && ua.includes('msie 9.0')

export const isEdge = ua && ua.includes('edge/')

export const isAndroid = ua && ua.includes('android')

export const isIos = ua && /iphone|ipad|ipod|ios/.test(ua)

export const isIPhone = ua && ua.includes('iphone')

export const isIPad = ua && ua.includes('ipad')

export const isChrome = ua && /chrome\/\d+/.test(ua) && !isEdge

export const isPhantom = ua && /phantomjs/.test(ua)

export const isFirefox = ua && ua.match(/firefox\/(\d+)/)

export const isMobile = ua && ua.includes('mobile')

export const isPc = !isMobile

export default {
  inBrowser,
  ua,
  isIE,
  isIE9,
  isEdge,
  isAndroid,
  isIos,
  isIPhone,
  isIPad,
  isChrome,
  isPhantom,
  isFirefox,
  isMobile,
  isPc
}
