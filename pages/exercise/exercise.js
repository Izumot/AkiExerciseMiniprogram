const {
  questionApi,
  quizApi
} = require("../../api/index");
const question = require("../../api/question");

// pages/exercise/exercise.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cur: 0,
    topic_id: 2,
    quiz_id: null,
    quiz_name: '',
    loading: true,
    popup_visible: false,
    dialog_visible: false,
    touchS: null,
    touchE: null,
    questions: [],
    userUnswer: [],
    tag_theme: ["primary", "warning", "danger", "success"],
    option_map:  ['A','B','C','D']
  },
  onVisibleChange(e) {
    this.setData({
      popup_visible: e.detail.visible
    });
  },
  handleSliderChange(e) {
    this.setData({
      cur: e.detail.value - 1,
    });
  },
  handleTouchStart(e) {
    let sx = e.touches[0].pageX
    let sy = e.touches[0].pageY
    this.setData({
      touchS: [sx, sy]
    })
  },
  handleTouchEnd(e) {
    let start = this.data.touchS
    let end = this.data.touchE
    let loading = this.data.loading
    if (loading) return; //无题目
    if (!end) return; //点击无move
    // console.log("Start: [" + start + "];   End: [" + end + "]")
    if (start[0] < end[0] - 80) {
      console.log("右滑")
      this.backQuestion()
    } else if (start[0] > end[0] + 80) {
      console.log("左滑")
      this.nextQuestion()
    } else if (start[1] > end[1] + 80) {
      console.log("上滑")
      this.setData({
        popup_visible: true
      })
    } else {
      console.log("静止")
    }
    this.setData({
      touchE: null,
      touchS: null
    }) //清空
  },
  handleTouchMove(e) {
    let sx = e.touches[0].pageX
    let sy = e.touches[0].pageY
    this.setData({
      touchE: [sx, sy]
    })
  },
  handleClickNext(e) {
    console.log(e);
    this.nextQuestion()
    wx.vibrateShort({
      type: 'light',
    })
  },
  handleClickSubmit(e) {
    console.log(e)
    let userUnswer = this.data.userUnswer
    let len = this.data.questions.length
    if (userUnswer.length == len && userUnswer.every((i) => !!i)) {
      //答案都不为空
      this.submit()
    } else {
      //答案存在空
      this.setData({
        dialog_visible: true
      })
    }
  },
  submit() {
    console.log("submit")
    //提交记录duration
  },
  confirmDialog(e) {
    this.setData({
      dialog_visible: false
    })
    this.submit()
  },
  cancelDialog(e) {
    this.setData({
      dialog_visible: false
    })
  },
  nextQuestion() {
    let cur = this.data.cur
    if (cur < this.data.questions.length - 1) {
      this.setData({
        cur: cur + 1
      })
    } else {
      //最后一题
      wx.vibrateShort({
        type: 'heavy',
      })
    }
  },
  backQuestion() {
    let cur = this.data.cur
    if (cur > 0) {
      this.setData({
        cur: cur - 1
      })
    } else {
      wx.vibrateShort({
        type: 'medium',
      })
    }
  },
  onRadioChange(event) {
    console.log('radio: ', event.detail);
    let d = this.data
    let unswer = "userUnswer[" + d.cur + "]"
    this.setData({
      [unswer]: [event.detail.value]
    })
    let quiz_id = d.quiz_id
    let question_id = d.questions[d.cur].question_id
    let user_answer = d.option_map[event.detail.value]
    quizApi.updateQuizQuestion(quiz_id, question_id, user_answer)
  },
  onJudgeChange(event) {
    console.log('judge: ', event.detail);
    let d = this.data
    let unswer = "userUnswer[" + d.cur + "]"
    this.setData({
      [unswer]: [event.detail.value]
    })
    let quiz_id = d.quiz_id
    let question_id = d.questions[d.cur].question_id
    let user_answer = d.option_map[event.detail.value]
    quizApi.updateQuizQuestion(quiz_id, question_id, user_answer)
  },
  onCheckBoxChange(event) {
    console.log('checkbox: ', event.detail);
    let unswer = "userUnswer[" + this.data.cur + "]"
    this.setData({
      [unswer]: event.detail.value
    })
  },
  onInputChange(e) {
    console.log("input: ", e.currentTarget.dataset)
    let index = e.currentTarget.dataset.index
    let unswer = "userUnswer[" + this.data.cur + "][" + index + "]"
    this.setData({
      [
        [unswer]
      ]: e.detail.value
    })
  },
  onInputClear(e) {
    console.log("input clear: ", e.currentTarget.dataset)
    let index = e.currentTarget.dataset.index
    let unswer = "userUnswer[" + this.data.cur + "][" + index + "]"
    this.setData({
      [
        [unswer]
      ]: ''
    })
  },
  create_topic_page: async function(topic_id){
    console.log("topic_id: "+topic_id)
    const topic = await questionApi.readQuestionsByTopicId(topic_id)
    let questions = topic.questions
    let quiz_name = topic.topic_name
    //生成quiz
    let data = {topic_id: topic_id, quiz_name: quiz_name}
    const quiz = await quizApi.createQuiz(data)
    let quiz_id = quiz.quiz_id
    //问题根据类型进行排序
    questions.sort(function (a, b) {
      return a.type_id - b.type_id
    })
    //生成quiz questions
    let question_ids = questions.map(x => x.question_id)
    console.log(question_ids)
    await quizApi.createQuizQuestions(quiz_id, question_ids)
    this.setData({
      topic_id: topic_id,
      quiz_id: quiz_id,
      questions: questions,
      loading: false,
      quiz_name: quiz_name
    })
  },
  create_daily_page: async function(daily_num){
    // 问题序号调用TODO
    let num = daily_num
    const questions = await questionApi.readQuestionsDaily(num)
    let quiz_name = '每日测评' + Date.now()
    //生成quiz
    let data = {quiz_name: quiz_name}
    const quiz = await quizApi.createQuiz(data)
    let quiz_id = quiz.quiz_id
    //问题根据类型进行排序
    questions.sort(function (a, b) {
      return a.type_id - b.type_id
    })
    //生成quiz questions
    let question_ids = questions.map(x => x.question_id)
    console.log(question_ids)
    await quizApi.createQuizQuestions(quiz_id, question_ids)
    this.setData({
      quiz_id: quiz_id,
      questions: questions,
      loading: false,
      quiz_name: quiz_name
    })
  },
  create_continue_page: async function(quiz_id){
      const { topic_id, questions, quiz_name} = await questionApi.readQuestionsByQuizIdWithoutAnswer(quiz_id)
      //问题根据类型进行排序
      questions.sort(function (a, b) {
        return a.type_id - b.type_id
      })
      this.setData({
        topic_id: topic_id,
        quiz_id: quiz_id,
        questions: questions,
        loading: false,
        quiz_name: quiz_name
      })
      // 加载用户答案
      console.log(this.data.quiz_id)
      const quiz_questions = await quizApi.readQuizQuestions(quiz_id)
      let user_answer = []
      for (let i = 0; i < quiz_questions.length; i++){
        let question = quiz_questions[i]
        if(question.user_answer) {
          let answers = question.user_answer.split("#").map(x => this.data.option_map.indexOf(x))
          user_answer.push(answers)
        } else {
          user_answer.push([])
        }
      }
      this.setData({
        userUnswer: user_answer
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function(options) {
    console.log("Exercise onLoad")
    console.log(options)
    if (options.topic_id) {
      // 专题调用
      this.create_topic_page(options.topic_id)
    }  else if (options.daily_num) {
      // 每日答题
      this.create_daily_page(options.daily_num)
    } else if (options.quiz_id) {
      // 继续答题
      this.create_continue_page(options.quiz_id)
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    console.log("Exercise onUnload")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})