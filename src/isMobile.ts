import useragent from './useragent'

const isMobile = useragent && useragent.includes('mobile')

export default isMobile
