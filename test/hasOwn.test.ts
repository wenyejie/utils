import hasOwn from '../hasOwn'

test('hasOwn', () => {
  const obj = { name: 'storm' }
  expect(hasOwn(obj, 'name')).toBeTruthy()
  expect(hasOwn(obj, 'toString')).toBeFalsy()
  expect(hasOwn(obj, 'prop')).toBeFalsy()
})