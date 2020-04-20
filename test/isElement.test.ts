import isElement from '../src/isElement'

test('isElement', () => {
  const $img = document.createElement('img')

  expect(isElement($img)).toBeTruthy()

  expect(isElement('')).toBeFalsy()
})
