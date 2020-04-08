import { isEdge } from '../env'

test('isEdge', () => {
  expect(isEdge()).toBeFalsy()

  Object.defineProperty(navigator, 'userAgent', {
    writable: true,
    value:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/17.17134'
  })

  expect(isEdge()).toBeTruthy()
})
