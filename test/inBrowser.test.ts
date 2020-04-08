import { inBrowser } from '../env'

test('inBrowser', () => {
  expect(inBrowser()).toBeTruthy()
})
