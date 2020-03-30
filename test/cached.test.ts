import cached from '../cached'

const add = cached((a: number, b: number): number => {
  return a + b
})

test('cached---基础测试', () => {
  expect(add(1, 1)).toBe(2)
})

test('cached---错误参数测试', () => {
  expect(add(NaN, 1)).toBe(Number.NaN)
  expect(add(NaN, 1)).toBe(Number.NaN)
})
