import find from '../src/find'

test('findItemByProps', () => {
  const data = [
    {
      name: '斯温',
      camp: '天辉'
    },
    {
      name: '冰女',
      camp: '天辉'
    }
  ]
  expect(find(data, 'name', '冰女')).toEqual(data[1])
  expect(find(data, { name: '冰女' })).toEqual(data[1])
})
