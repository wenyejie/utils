import isChrome from '../isChrome'

test('isChrome', () => {
  expect(isChrome()).toBeFalsy()

  Object.defineProperty(navigator, 'userAgent', {
    writable: true,
    value:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36'
  })

  expect(isChrome()).toBeTruthy()
})
