import camelize from '../src/camelize'

test('camelize', () => {
  expect(camelize('font-size')).toBe('fontSize')
  expect(camelize('border-top-color')).toBe('borderTopColor')
  expect(camelize('backgroundColor')).toBe('backgroundColor')
})
