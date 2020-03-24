import useragent from './useragent'

export const isPhantom = useragent && /phantomjs/.test(useragent)

export default isPhantom
