import { expect, test } from 'vitest'
import { toRawType } from '../src/toRawType'

test('toRawType', () => {
  expect(toRawType(Number.NaN) === 'number').toBeTruthy()
  expect(toRawType({}) === 'object').toBeTruthy()
  expect(toRawType(null) === 'null').toBeTruthy()
  expect(toRawType('') === 'string').toBeTruthy()
  expect(toRawType(Symbol('')) === 'symbol').toBeTruthy()
  // expect(toRawType(new Blob(['text'], { type: 'text/plain' }))).toBe('blob')
})
