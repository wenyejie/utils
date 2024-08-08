import { expect, test } from 'vitest'
import { camelize } from '../src/camelize'

test('camelize', () => {
  const str = 'demo-name'

  expect(camelize(str)).toEqual('demoName')

  expect(camelize('demoName')).toEqual('demoName')
})
