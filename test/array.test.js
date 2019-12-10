import { arrayUnique } from '../src/array.js'
test('arrayUnique', () => {
  expect(arrayUnique([0, 0, 1, 2, 3, 4, 4])).toStrictEqual([0, 1, 2, 3, 4])
})
