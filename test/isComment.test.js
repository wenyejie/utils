import isComment from '../src/isComment'

test('isComment', () => {
  const $comment = document.createComment('TEST')
  expect(isComment($comment)).toBeTruthy()

  expect(isComment({})).toBeFalsy()
})
