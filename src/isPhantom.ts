import useragent from './useragent'

const isPhantom = useragent && /phantomjs/.test(useragent)

export default isPhantom
