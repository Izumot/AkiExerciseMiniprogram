// pages/history/history.js
const { quizApi } = require("../../api/index");

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