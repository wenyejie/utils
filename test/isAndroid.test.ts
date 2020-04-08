import { isAndroid } from '../env'

test('isAndroid', () => {
  expect(isAndroid()).toBeFalsy()

  Object.defineProperty(navigator, 'userAgent', {
    writable: true,
    value:
      'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Mobile Safari/537.36'
  })
  expect(isAndroid()).toBeTruthy()
})
