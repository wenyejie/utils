import isBlob from '../isBlob'

test('isBlob', () => {
  const blob = new Blob()

  expect(isBlob(blob)).toBeTruthy()

  expect(isBlob('')).toBeFalsy()
})
