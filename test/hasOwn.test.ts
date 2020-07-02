import hasOwn from '../src/hasOwn'

test('hasOwn', () => {
  const obj = { name: 'wenyejie' }
  expect(hasOwn(obj, 'name')).toBeTruthy()
  expect(hasOwn(obj, 'toString')).toBeFalsy()
  expect(hasOwn(obj, 'prop')).toBeFalsy()
})
