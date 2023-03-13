const request = require("./request")

module.exports = {
  readTopics() {
    let url = "/topics"
    return request.get({url})
  },
}