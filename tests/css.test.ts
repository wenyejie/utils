import { test, expect } from 'vitest'
import { Window, CSSStyleDeclaration } from 'happy-dom'
import { getCSS } from '../src/css'

const window = new Window({
  url: 'http://localhost:8081/examples/',
  width: 1024,
  height: 768
});

const $div = window.document.createElement('div')
window.document.body.appendChild($div)

test('getCSS', () => {
  expect(getCSS($div)).toBeTypeOf('object')
  expect(getCSS($div)).toBeInstanceOf(CSSStyleDeclaration)
  expect(getCSS($div, 'display')).toBe('block')
  expect(getCSS).toThrowError('请传入正确的参数elt: HTMLElement')
})

test('setCSS', () => {

})
