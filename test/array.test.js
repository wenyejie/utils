import { unique } from '../src/array.js'
test('unique', () => {
  expect(unique([0, 0, 1, 2, 3, 4, 4])).toStrictEqual([0, 1, 2, 3, 4])
})
