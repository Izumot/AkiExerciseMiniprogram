const request = require("./request")

module.exports = {
  readQuestionsByTopicId(topic_id) {
    let url = `/questions?topic_id=${topic_id}`
    return request.get({url})
  },
}