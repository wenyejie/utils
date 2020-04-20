import isFunction from '../src/isFunction'

test('isFunction', () => {
  const demo = () => {}

  expect(isFunction(demo)).toBeTruthy()
  expect('').toBeFalsy()
  expect(isFunction(function() {})).toBeTruthy()
})
