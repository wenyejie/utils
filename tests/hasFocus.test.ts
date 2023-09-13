import { expect, test } from 'vitest'
import hasFocus from '../src/hasFocus'
import { document } from './utils'
import globalThis from '../src/globalThis'

test('hasFocus', () => {
  globalThis.document = document
  const elButton = document.createElement('button')
  document.body.appendChild(elButton)

  // @ts-ignore
  elButton.focus()

  expect(hasFocus(elButton)).toBeTruthy()
})
