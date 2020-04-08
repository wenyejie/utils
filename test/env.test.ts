import {
  inBrowser,
  isAndroid,
  isChrome,
  isEdge,
  isFirefox,
  isIE,
  isIE9,
  isIOS,
  isIPad,
  isIPhone,
  isLinux,
  isMac,
  isPC,
  isPhantom,
  isUbuntu,
  isWeChat,
  isWindows,
  useragent
} from '../env'

const setUa = (value: string) => {
  Object.defineProperty(navigator, 'userAgent', {
    writable: true,
    value
  })
}

test('useragent', () => {
  const ua = 'mozilla/5.0 (win32) applewebkit/537.36 (khtml, like gecko) jsdom/11.12.0'
  setUa(ua)
  expect(useragent()).toBe(ua)
})

test('inBrowser', () => {
  expect(inBrowser()).toBeTruthy()
})

test('isAndroid', () => {
  expect(isAndroid()).toBeFalsy()

  setUa(
    'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Mobile Safari/537.36'
  )
  expect(isAndroid()).toBeTruthy()
})

test('isChrome', () => {
  setUa(
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36'
  )

  expect(isChrome()).toBeTruthy()
})

test('isEdge', () => {
  setUa(
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/17.17134'
  )

  expect(isEdge()).toBeTruthy()
})

test('isFirefox', () => {
  setUa('Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0')

  expect(isFirefox()).toBeTruthy()
})

test('isIE', () => {
  setUa('Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; Touch; rv:11.0) like Gecko')
  expect(isIE()).toBeTruthy()
})

test('isIE9', () => {
  setUa('Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/6.0)')
  expect(isIE9()).toBeTruthy()
})

test('isIOS', () => {
  setUa(
    'Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.5 Mobile/15E148 Snapchat/10.77.5.59 (like Safari/604.1)'
  )
  expect(isIOS()).toBeTruthy()
})

test('isIPad', () => {
  setUa(
    'Mozilla/5.0 (iPad; CPU OS 11_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Tablet/15E148 Safari/604.1'
  )
  expect(isIPad()).toBeTruthy()
})

test('isIPhone', () => {
  setUa(
    'Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/80.0.3987.95 Mobile/15E148 Safari/604.1'
  )
  expect(isIPhone()).toBeTruthy()
})

test('isPC', () => {
  setUa('Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0')
  expect(isPC()).toBeTruthy()
})

test('isPhantom', () => {
  setUa('phantomjs')
  expect(isPhantom()).toBeTruthy()
})

test('isWeChat', () => {
  setUa(
    'Mozilla/5.0 (iPhone; CPU iPhone OS 12_1_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/16D57 MicroMessenger/7.0.3(0x17000321) NetType/WIFI Language/zh_CN'
  )
  expect(isWeChat()).toBeTruthy()
})

test('isWindows', () => {
  setUa('Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0')
  expect(isWindows()).toBeTruthy()
})

test('isMac', () => {
  setUa(
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.3538.77 Safari/537.36'
  )
  expect(isMac()).toBeTruthy()
})

test('isUbuntu', () => {
  setUa(
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/535.11 (KHTML, like Gecko) Ubuntu/14.04.6 Chrome/81.0.3990.0 Safari/537.36'
  )
  expect(isUbuntu()).toBeTruthy()
})
test('isLinux', () => {
  setUa(
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36'
  )
  expect(isLinux()).toBeTruthy()
})
