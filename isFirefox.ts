import useragent from './useragent'

export const isFirefox = useragent && /firefox\/(\d+)/.test(useragent)

export default isFirefox
