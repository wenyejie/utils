import toCSSUnit from '../src/toCSSUnit'

test('toCSSUnit', () => {
  expect(toCSSUnit('18')).toStrictEqual('18px')
  expect(toCSSUnit(18)).toStrictEqual('18px')
  expect(toCSSUnit('18rem')).toStrictEqual('18rem')
})
