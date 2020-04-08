import isAndroid from '../isAndroid'

test('isAndroid', () => {
  expect(isAndroid()).toBeFalsy()

  Object.defineProperty(navigator, 'userAgent', {
    writable: true,
    value: 'android'
  })
  expect(isAndroid()).toBeTruthy()
})
