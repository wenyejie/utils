import { temporary } from '../src/wenyejie'
import { expect, test } from 'vitest'
import wait from '../src/wait'

test('temporary', async () => {
  const demo = temporary(() => {
    return Math.random()
  })

  const value = demo()
  expect(demo()).toEqual(value)
  expect(demo()).toEqual(value)
  expect(demo()).toEqual(value)
  await wait(500)
  const value2 = demo()
  expect(value).not.toEqual(value2)
  expect(demo()).toEqual(value2)
})
