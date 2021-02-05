import cachedOne from '../src/cachedOne'

const add = cachedOne(() => {
  console.log('runing')
  return 10
})

test('cachedOne', () => {
  console.log(add)
  expect(add()).toBe(10)
  expect(add()).toBe(10)
  expect(add()).toBe(10)
})
