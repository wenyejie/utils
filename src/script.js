import load from './load.js'
/**
 * 载入script
 * @param url
 * @param options
 */
export const script = (url, options) => {
  return load('script', url, options)
}

export default script
