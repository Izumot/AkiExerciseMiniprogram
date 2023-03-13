const request = require("./request")

module.exports = {
  createQuiz(data) {
    let url = '/quiz'
    console.log(data)
    return request.post({url, data})
  },
  readQuizzes() {
    let url = '/quizzes'
    return request.get({url})
  }
}