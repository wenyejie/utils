import inBrowser from '../inBrowser'
import isAndroid from '../isAndroid'

test('inBrowser', () => {
  expect(inBrowser()).toBeTruthy()
})
