import isSameDay from '../isSameDay'

test('isSameDay', () => {
  const date = new Date('2020-02-02')
  expect(isSameDay(new Date())).toBeTruthy()
  expect(isSameDay(date)).toBeFalsy()
  expect(isSameDay(date, 1580601600000)).toBeTruthy()
})
