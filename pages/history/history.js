// pages/history/history.js
const { quizApi } = require("../../api/index");
const quiz = require("../../api/quiz");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    quizzes: []
  },
  transTime(str){
    let list = str.split('T')
    let timestr = list[0] + list[1].split()[0]
    console.log(timestr)
    return timestr
  },
  onDelete(e) {
    console.log(e)
    //删除对应测评历史
    let index = e.currentTarget.dataset.id
    let quiz_id = this.data.quizzes[index].quiz_id
    quizApi.deleteQuiz(quiz_id)
    //删除data中测评
    let quizzes = this.data.quizzes
    let modify_quizzes = quizzes.slice(0, index).concat(quizzes.slice(index+1, quizzes.length))
    this.setData({
      quizzes: modify_quizzes
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    
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
    this.getTabBar().init()
    quizApi.readQuizzes().then(res => {
      console.log(res)
      res.reverse()
      this.setData({
        quizzes: res
      })
    })
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
    quizApi.readQuizzes().then(res => {
      console.log(res)
      res.reverse()
      this.setData({
        quizzes: res
      })
    })
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