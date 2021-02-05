import cached from '../src/cached'

const add = cached((a, b) => {
  return a + b
})

test('cached---基础测试', () => {
  expect(add(1, 1)).toBe(2)
})

test('cached---错误参数测试', () => {
  expect(add(NaN, 1)).toBe(Number.NaN)
  expect(add(NaN, 1)).toBe(Number.NaN)
})
