const {ENV} = require('./env')
let BASEURL

switch (ENV) {
  case 'production':
    BASEURL = 'https://c.ang.ink'
    break;
  case 'test':
    BASEURL = 'http://127.0.0.1:8000'
  default:
    BASEURL = 'http://127.0.0.1:8000'
    break;
}

module.exports = {
  BASEURL,
}