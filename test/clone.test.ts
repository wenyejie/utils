import clone from '../src/clone'

const OBJ = { name: 'TEST' }

test('clone---正确', () => {
  const cloneOBJ = clone(OBJ)
  expect(OBJ).toStrictEqual(cloneOBJ)
  cloneOBJ.age = 20
  expect(cloneOBJ).toHaveProperty('age')
  expect(OBJ).not.toHaveProperty('age')
})

test('clone---循环对象', () => {
  let objA
  let objB
  objA = { name: 'a', b: objB }
  objB = { name: 'b', a: objA }
  const obj = { a: objA, b: objB }
  const cloneObj = clone(obj)

  expect(obj).toStrictEqual(cloneObj)
})
