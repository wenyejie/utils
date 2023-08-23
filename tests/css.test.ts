import { expect, test } from 'vitest'
import { CSSStyleDeclaration, Window } from 'happy-dom'
import { getCSS, setCSS, supportCSS } from '../src/css'
import globalThis from '../src/globalThis'


const window = new Window({
    url: 'http://localhost:8081/examples/',
    width: 1024,
    height: 768
})

const $div = window.document.createElement('div')
window.document.body.appendChild($div)

test('getCSS', () => {
  expect(getCSS($div)).toBeTypeOf('object')
  expect(getCSS($div)).toBeInstanceOf(CSSStyleDeclaration)
  expect(getCSS($div, 'display')).toBe('block')
  expect(getCSS({})).toBeUndefined()
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
  expect(setCSS({}, 'display', 'block')).toBeUndefined()
})

test('supportCSS', () => {
  globalThis.CSS.supports = window.CSS.supports
  expect(supportCSS('display', 'block')).toBeTruthy()
  expect(supportCSS('(transform-origin: 5% 5%)')).toBeTruthy()
  delete globalThis.CSS
})
