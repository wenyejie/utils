import { expect, test } from 'vitest'
import { capitalize } from '../src/capitalize'

test('capitalize', () => {
  expect(capitalize('demo')).toEqual('Demo')
  expect(capitalize('Demo')).toEqual('Demo')
  expect(capitalize('demoName')).toEqual('DemoName')
})
