module.exports = {
  testRegex: '/test/.*.test.(j|ts)$',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'js']
}
