import { removeItemByProp } from '../src/remove.js'

const array = [
  {
    name: 'test',
    value: '123'
  },
  {
    name: 'test1',
    value: '321'
  },
  {
    name: 'test',
    value: '321'
  }
]

test('removeItemByProp', () => {
  expect(removeItemByProp(array, 'value', '123')).toStrictEqual([
    {
      name: 'test1',
      value: '321'
    },
    {
      name: 'test',
      value: '321'
    }
  ])

  expect(removeItemByProp(array, { value: '321' })).toStrictEqual([{ name: 'test', value: '123' }])
})
