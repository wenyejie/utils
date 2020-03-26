import ban from '../ban'

test('ban', () => {
  const obj = {
    name: 'test',
    age: 28
  }
  expect(ban(obj, 'name')).toStrictEqual({ age: 28 })
})
