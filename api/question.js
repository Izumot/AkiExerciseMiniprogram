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
  readQuestionsByQuizIdWithoutAnswer(quiz_id) {
    let url = `/questions/quiz/without-answer?quiz_id=${quiz_id}`
    return request.get({url})
  },
  readQuestionsByQuizIdWithAnswer(quiz_id) {
    let url = `/questions/quiz/with-answer?quiz_id=${quiz_id}`
    return request.get({url})
  }
}