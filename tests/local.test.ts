import { expect, test } from 'vitest'
import { window } from './utils'
import { local } from '../src/local'
import { globalThis } from '../src/globalThis'

test('local', () => {
  // @ts-ignore
  globalThis.sessionStorage = window.sessionStorage
  expect(local('name')).toBeUndefined()
  local('name', 'storm')
  expect(local('name')).toBe('storm')
  local('name', null)
  expect(local('name')).toBeUndefined()
})
