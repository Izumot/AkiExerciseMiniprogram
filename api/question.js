const request = require("./request")

module.exports = {
  readQuestionsDaily(num) {
    let url = `/questions/daily?num=${num}`
    return request.get({url})
  },
  readQuestionsByTopicId(topic_id) {
    let url = `/questions/topic?topic_id=${topic_id}`
    return request.get({url})
  },
}