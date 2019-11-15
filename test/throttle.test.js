import throttle from '../src/throttle.js'
test('节流函数测试', () => {
  const fn = () => {}
  const interval = 500
  expect(throttle(fn, interval)).toBe('Hello World!')
})
