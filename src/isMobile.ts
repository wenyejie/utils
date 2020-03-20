import useragent from './useragent'

export const isMobile = useragent && useragent.includes('mobile')

export default isMobile
