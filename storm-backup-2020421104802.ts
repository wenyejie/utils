export const VERSION = '1.1.4'

// @ts-ignore
const files = require.context('./src', true, /\.ts$/)

files.keys().map(files)
