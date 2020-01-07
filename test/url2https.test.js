import url2https from '../src/url2https.js'
test('url2https', () => {
  const url = 'http://www.wenyejie.com'
  const httpsUrl = 'https://www.wenyejie.com'
  expect(url2https(url)).toBe(httpsUrl)
})
