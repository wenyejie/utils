import findItemByProps from '../findItemByProps'

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
  expect(findItemByProps(data, 'name', '冰女')).toEqual(data[1])
  expect(findItemByProps(data, { name: '冰女' })).toEqual(data[1])
})
