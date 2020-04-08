export const inBrowser = () => typeof window !== 'undefined'

export const useragent = () => (inBrowser() ? window.navigator.userAgent.toLocaleLowerCase() : '')

export const isAndroid = () => useragent().includes('android')

export const isEdge = () => useragent().includes('edge')

export const isChrome = () => /chrome\/\d+/.test(useragent()) && !isEdge()

export const isFirefox = /firefox\/(\d+)/.test(useragent())

export const isIE = /msie|trident/.test(useragent())

export const isIE9 = () => useragent().includes('msie 9.0')

export const isIOS = /iphone|ipad|ipod|ios/.test(useragent())

export const isIPad = () => useragent().includes('ipad')

export const isIPhone = () => useragent().includes('iphone')

export const isMobile = () => useragent().includes('mobile')

export const isPC = !isMobile()

export const isPhantom = /phantomjs/.test(useragent())

export const isWeChat = () => useragent().includes('micromessenger')
