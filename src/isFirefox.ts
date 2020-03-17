import useragent from './useragent'

const isFirefox = useragent && /firefox\/(\d+)/.test(useragent)

export default isFirefox
