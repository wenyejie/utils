import isBlob from '../src/isBlob'

test('isBlob', () => {
  const blob = new Blob()

  expect(isBlob(blob)).toBeTruthy()

  expect(isBlob('')).toBeFalsy()
})
