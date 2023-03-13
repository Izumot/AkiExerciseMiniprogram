// pages/exercise/exercise.js
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    cur: 0,
    tid: null,
    loading: true,
    popup_visible: false,
    dialog_visible: false,
    touchS : null,
    touchE : null,
    questions: [],
    userUnswer: [],
    tag_theme: {
      "单选题": "primary",
      "多选题": "warning",
      "判断题": "danger",
      "填空题": "success"
    },
  },
  onVisibleChange(e) {
    this.setData({
      popup_visible: e.detail.visible
    });
  },
  handleSliderChange(e) {
    this.setData({
      cur: e.detail.value-1,
    });
  },
  handleTouchStart(e) {
    console.log(e)
    let sx = e.touches[0].pageX
    let sy = e.touches[0].pageY
    this.setData({
      touchS: [sx, sy]
    })
  },
  handleTouchEnd(e) {
    console.log(e)
    let start = this.data.touchS
    let end = this.data.touchE
    let loading = this.data.loading
    if(loading) return;//无题目
    if(!end) return;//点击无move
    console.log("Start: ["+start+"];   End: ["+end+"]")
    if(start[0] < end[0] - 80){
      console.log("右滑")
      this.backQuestion()
    }else if(start[0] > end[0] + 80){
      console.log("左滑")
      this.nextQuestion()
    }else if(start[1] > end[1] + 80){
      console.log("上滑")
      this.setData({popup_visible: true})
    }else{
      console.log("静止")
    }
    this.setData({touchE: null, touchS: null})//清空
  },
  handleTouchMove(e) {
    let sx = e.touches[0].pageX
    let sy = e.touches[0].pageY
    this.setData({
      touchE: [sx, sy]
    })
    console.log(e)
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
    if(userUnswer.length==len && userUnswer.every((i) => !!i)){
      //答案都不为空
      this.submit()
    }else {
      //答案存在空
      this.setData({
        dialog_visible: true
      })
    }
  },
  submit() {
    console.log("submit")
  },
  confirmDialog(e) {
    this.setData({
      dialog_visible: false
    })
    this.submit()
  },
  cancelDialog(e){
    this.setData({
      dialog_visible: false
    })
  },
  nextQuestion(){
    let cur = this.data.cur
    if(cur < this.data.questions.length - 1) {
      this.setData({cur: cur+1})
    }else{
      //最后一题
      wx.vibrateShort({
        type: 'heavy',
      })
    }
  },
  backQuestion(){
    let cur = this.data.cur
    if(cur > 0) {
      this.setData({cur: cur-1})
    }else {
      wx.vibrateShort({
        type: 'medium',
      })
    }
  },
  onRadioChange(event) {
    console.log('radio: ', event.detail);
    let unswer = "userUnswer["+this.data.cur+"]"
    this.setData({
      [unswer]: [event.detail.value]
    })
  },
  onJudgeChange(event) {
    console.log('judge: ', event.detail);
    let unswer = "userUnswer["+this.data.cur+"]"
    this.setData({
      [unswer]: [event.detail.value]
    })
  },
  onCheckBoxChange(event) {
    console.log('checkbox: ', event.detail);
    let unswer = "userUnswer["+this.data.cur+"]"
    this.setData({
      [unswer]: event.detail.value
    })
  },
  onInputChange(e) {
    console.log("input: ", e.currentTarget.dataset)
    let index = e.currentTarget.dataset.index
    let unswer = "userUnswer["+this.data.cur+"]["+index+"]"
    this.setData({
      [[unswer]]: e.detail.value
    })
  },
  onInputClear(e) {
    console.log("input clear: ", e.currentTarget.dataset)
    let index = e.currentTarget.dataset.index
    let unswer = "userUnswer["+this.data.cur+"]["+index+"]"
    this.setData({
      [[unswer]]: ''
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options)
    let that = this
    // 专题调用
    if (options.topic_id) {
      wx.request({
        url: 'https://api.aki.codes/questions?tid=' + options.topic_id,
        method: "GET",
        success(res) {
          let questions = res.data.questions
          console.log(questions)
          that.setData({
            questions: questions,
            tid: options.tid,
            loading: false //关闭加载
          })
        }
      })
    }
    // 问题序号调用
    if (options.qid) {
      let qids = options.qid.split(",")
      console.log(qids)
      //TODO
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