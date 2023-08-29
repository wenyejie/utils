import { expect, test } from 'vitest'
import { CSSStyleDeclaration } from 'happy-dom'
import getCSS from '../src/getCSS'
import setCSS from '../src/setCSS'
import supportCSS from '../src/supportCSS'
import globalThis from '../src/globalThis'
import { window, document } from './utils'

const $div = document.createElement('div')
document.body.appendChild($div)

test('getCSS', () => {
  expect(getCSS($div)).toBeTypeOf('object')
  expect(getCSS($div)).toBeInstanceOf(CSSStyleDeclaration)
  expect(getCSS($div, 'display')).toBe('block')
})

test('setCSS', () => {
  setCSS($div, 'display', 'flex')
  expect(getCSS($div, 'display')).toBe('flex')
  setCSS($div, {
    display: 'block',
    margin: '1px',
  })
  expect(getCSS($div, 'display')).toBe('block')
  expect(getCSS($div, 'margin')).toBe('1px')
})

test('supportCSS', () => {
  globalThis.CSS.supports = window.CSS.supports
  expect(supportCSS('display', 'block')).toBeTruthy()
  expect(supportCSS('(transform-origin: 5% 5%)')).toBeTruthy()
  delete globalThis.CSS
})
