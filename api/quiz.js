const question = require("./question")
const request = require("./request")

module.exports = {
  createQuiz(data) {
    let url = '/quiz'
    console.log(data)
    return request.post({url, data})
  },
  updateQuiz(quiz_id, duration) {
    let url = `/quiz?quiz_id=${quiz_id}`
    let data = {
      "duration": duration,
    }
    return request.put({url, data})
  },
  deleteQuiz(quiz_id) {
    let url = `/quiz?quiz_id=${quiz_id}`
    return request.del({url})
  },
  readQuizzes() {
    let url = '/quizzes'
    return request.get({url})
  },
  readQuizQuestions(quiz_id) {
    let url = `/quiz/questions?quiz_id=${quiz_id}`
    return request.get({url})
  },
  createQuizQuestions(quiz_id, question_ids) {
    let url = `/quiz/questions?quiz_id=${quiz_id}`
    let data = {
      "question_ids": question_ids
    }
    return request.post({url, data})
  },
  updateQuizQuestion(quiz_id, question_id, user_answer) {
    let url = `/quiz/question?quiz_id=${quiz_id}&question_id=${question_id}`
    let data = {
      "user_answer": user_answer
    }
    return request.put({url, data})
  }
}