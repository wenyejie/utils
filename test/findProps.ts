import findProps from '../findProps'

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
  expect(findProps(data, '44')).toBe('广东省')
})
