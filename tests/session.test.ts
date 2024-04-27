import { expect, test } from 'vitest'
import { window } from './utils'
import { session } from '../src/session'
import { globalThis } from '../src/globalThis'

test('session', () => {
  // @ts-ignore
  globalThis.sessionStorage = window.sessionStorage
  expect(session('name')).toBeUndefined()
  session('name', 'storm')
  expect(session('name')).toBe('storm')
  session('name', null)
  expect(session('name')).toBeUndefined()
})
