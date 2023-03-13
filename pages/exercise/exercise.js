const {
  questionApi,
  quizApi
} = require("../../api/index");

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
    tag_theme: ["primary", "warning", "danger", "success"]
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
    //
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
    let unswer = "userUnswer[" + this.data.cur + "]"
    this.setData({
      [unswer]: [event.detail.value]
    })
  },
  onJudgeChange(event) {
    console.log('judge: ', event.detail);
    let unswer = "userUnswer[" + this.data.cur + "]"
    this.setData({
      [unswer]: [event.detail.value]
    })
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
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function(options) {
    console.log("Exercise onLoad")
    console.log(options)
    // 专题调用
    if (options.topic_id) {
      let topic_id = options.topic_id
      console.log("topic_id: "+topic_id)
      const topic = await questionApi.readQuestionsByTopicId(topic_id)
      let questions = topic.questions
      let quiz_name = topic.topic_name
      console.log(topic)
      let data = {topic_id: topic_id, quiz_name: quiz_name}
      const quiz = await quizApi.createQuiz(data)
      let quiz_id = quiz.quiz_id
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
    }
    // 问题序号调用
    else if (options.daily_num) {
      let num = options.daily_num
      questionApi.readQuestionsDaily(num).then(res => {
        let questions = res
        let quiz_name = '每日测评' + Date.now()
        //问题根据类型进行排序
        questions.sort(function (a, b) {
          return a.type_id - b.type_id
        })
        this.setData({
          questions: questions,
          loading: false,
          quiz_name: quiz_name
        })
      }).catch(err => {console.log(err)})
    }
    // 加载用户答案
    //TODO
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    console.log("Exercise onReady")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    console.log("Exercise onShow")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    console.log("Exercise onHide")
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