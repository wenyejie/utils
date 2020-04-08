import useragent from './useragent'

export const isMobile = () => useragent().includes('mobile')

export default isMobile
