import useragent from './useragent'

export const isPhantom = /phantomjs/.test(useragent())

export default isPhantom
