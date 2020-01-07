export const url2https = url => {
  if (/^https/.test(url)) {
    return url
  }
  return url.replace(/^http/, 'https')
}

export default url2https
