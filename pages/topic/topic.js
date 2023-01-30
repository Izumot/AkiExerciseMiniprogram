
// pages/material/material.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // subjects: {}
    subjects: [
      {"type": "网络安全","topics":[{"tid":1,"title":"网络安全法知识测评","time":"2022/12/23"},{"tid":2,"title":"2021网络安全知识竞赛","time":"2023/01/27"}]},
      {"type": "时事热点","topics":[{"tid":3,"title":"习近平主席二〇二三年新年贺词","time":"2022/12/31"}]},
      {"type": "周测","topics":[{"tid":4,"title":"2023第一周周测","time":"2023/01/01"}]},
      {"type": "其他","topics":[{"tid":5,"title":"测试","time":"2022/12/24"}]}
    ]
  },
  onTabsChange(event) {
    console.log(`Change tab, tab-panel value is ${event.detail.value}.`);
  },

  onTabsClick(event) {
    console.log(`Click tab, tab-panel value is ${event.detail.value}.`);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getTabBar().init()
    let that = this
    wx.request({
      url: 'https://api.aki.codes/subjects',
      method: "GET",
      success(res) {
        let subjects = res.data.subjects
        that.setData({subjects: subjects})
        wx.setStorageSync('subjects', subjects)
      }
    })
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
    let that = this
    wx.getStorage({"key":"subjects",success(res) {
        console.log(res)
        that.setData({
          subjects: res.data
        })
    }})
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