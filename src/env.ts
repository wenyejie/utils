import { globalThis } from './globalThis'

export const inBrowser = () => typeof window !== 'undefined'

export const inNode = () => typeof global !== 'undefined'

export const useragent = () => (inBrowser() ? globalThis.navigator.userAgent.toLocaleLowerCase() : '')

export const isAndroid = () => useragent().includes('android')

export const isEdge = () => useragent().includes('edge')

export const isChrome = () => /chrome\/\d+/.test(useragent()) && !isEdge()

export const isSafari = () => /safari/.test(useragent()) && !isChrome()

export const isFirefox = () => /firefox\/(\d+)/.test(useragent())

export const isIE = () => /msie|trident/.test(useragent())

export const isIE9 = () => useragent().includes('msie 9.0')

export const isIOS = () => /iphone|ipad|ipod|ios/.test(useragent())

// Mozilla/5.0 (iPad; CPU OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/79.0.3945.73 Mobile/15E148 Safari/604.1
export const isIPad = () => useragent().includes('ipad')

// Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/80.0.3987.95 Mobile/15E148 Safari/604.1
export const isIPhone = () => useragent().includes('iphone')

export const isMobile = () => useragent().includes('mobile')

export const isPC = () => !isMobile()

export const isPhantom = () => /phantomjs/.test(useragent())

export const isWeChat = () => useragent().includes('micromessenger')

export const isWindows = () => useragent().includes('windows')

// Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.3538.77 Safari/537.36
export const isMac = () => useragent().includes('macintosh')

// Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/535.11 (KHTML, like Gecko) Ubuntu/14.04.6 Chrome/81.0.3990.0 Safari/537.36
export const isUbuntu = () => useragent().includes('ubuntu')

// Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36
export const isLinux = () => useragent().includes('linux') && !isUbuntu() && !isAndroid()
