const request = require("./request")

module.exports = {
  login(code) {
    let url = `/login?code=${code}`
    return request.get({url})
  },
  readUserMe () {
    let url = '/user/me'
    return request.get({url})
  },
  updateUserMe(nickname) {
    let url = `/user/me?nickname=${nickname}`
    return request.put({url})
  }
}