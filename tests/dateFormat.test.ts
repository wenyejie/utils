import { expect, test } from 'vitest'
import dateFormat from '../src/dateFormat'

test('dateFormat', () => {
  const date = new Date('2023-09-13 12:12:12.122')
  expect(dateFormat(date)).toBe('2023-09-13 12:12:12')
  expect(dateFormat(date, 'YYYY-MM-DD')).toBe('2023-09-13')
  expect(dateFormat(date, 'YY')).toBe('23')
  expect(dateFormat(date, 'M')).toBe('9')
  expect(dateFormat(date, 'D')).toBe('13')
  expect(dateFormat(date, 'h')).toBe('12')
  expect(dateFormat(date, 'm')).toBe('12')
  expect(dateFormat(date, 's')).toBe('12')
  expect(dateFormat(date, 'SSS')).toBe('122')
  expect(dateFormat(date, 'SS')).toBe('12')
  expect(dateFormat(date, 'S')).toBe('1')
  expect(dateFormat(date, '')).toBe('')

  expect(dateFormat(new Date('ddd'))).toBe('')
})
