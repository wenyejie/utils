import isArray from '../isArray'

test('isArray', () => {
  const data: any[] = []

  expect(isArray(data)).toBeTruthy()

  expect(isArray('')).toBeFalsy()
})
