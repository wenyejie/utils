import useragent from './useragent'

export const isFirefox = /firefox\/(\d+)/.test(useragent())

export default isFirefox
