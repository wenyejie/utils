import isArray from '../src/isArray'

test('isArray', () => {
  const data = []

  expect(isArray(data)).toBeTruthy()

  expect(isArray('')).toBeFalsy()
})
