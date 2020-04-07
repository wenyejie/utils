import findValueByProps from '../findValueByProps'

test('findValueByProps', () => {
  const data = [
    {
      label: '广东省',
      value: '44'
    },
    {
      label: '北京市',
      value: '11'
    }
  ]
  expect(findValueByProps(data, '44')).toBe('广东省')
})
