import ban from '../ban'

const obj = {
  name: 'test',
  age: 28,
  message: ''
}

test('ban---移除name', () => {
  expect(ban(obj, 'name')).toStrictEqual({
    age: 28,
    message: ''
  })
})

test('ban---移除没有的属性', () => {
  expect(ban(obj, 'name1')).toStrictEqual({
    name: 'test',
    age: 28,
    message: ''
  })
})

test('ban---移除所有属性', () => {
  expect(ban(obj, 'name', 'age', 'message')).toStrictEqual({})
})

test('ban---不移除属性', () => {
  expect(ban(obj)).toStrictEqual({
    name: 'test',
    age: 28,
    message: ''
  })
})

test('ban---非法参数', () => {
  expect(ban(obj, () => {})).toStrictEqual({
    name: 'test',
    age: 28,
    message: ''
  })
})
