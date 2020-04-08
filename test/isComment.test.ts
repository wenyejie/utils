import isComment from '../isComment'

test('isComment', () => {
  const $comment = document.createComment('TEST')
  expect(isComment($comment)).toBeTruthy()

  expect(isComment({})).toBeFalsy()
})
