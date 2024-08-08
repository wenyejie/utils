import { expect, test } from 'vitest'
import { clickOutside } from '../src/clickOutside'
import { document } from './utils'

test('clickOutside', () => {
  globalThis.document = document
  const div = document.createElement('div')
  const btn1 = document.createElement('button')
  const btn2 = document.createElement('button')
  div.appendChild(btn1)
  document.body.append(div, btn2)

  const callback = () => {
    expect(undefined).toBeUndefined()
  }

  const remove = clickOutside(div, callback)

  // @ts-ignore
  btn2.click()

  // @ts-ignore
  btn1.click()

  expect.assertions(1)
  expect.hasAssertions()
  remove()

  // @ts-ignore
  btn2.click()
  expect.assertions(1)
})
