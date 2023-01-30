// pages/mine/mine.js

Page({
  data: {
    uid: null,
    nickName: null,
    cur: {},
    visible: false,
    inputValue: null,
  },
  handlePopup(e) {
    const { item } = e.currentTarget.dataset;
    console.log(e)
    this.setData(
      {
        cur: item,
      },
      () => {
        this.setData({ visible: true });
      },
    );
  },
  onInputBlur(e) {
    console.log(e)
    this.setData({inputValue: e.detail.value})
  },
  onVisibleChange(e) {
    this.setData({
      visible: e.detail.visible,
      inputValue: null
    });
  },
  onPopupCancelTap(e) {
    this.setData({visible: false, inputValue: null})
  },
  onPopupConfirmTap(e){
    let inputValue = this.data.inputValue
    if(inputValue) {
      this.setData({nickName: inputValue})
    }
    this.setData({visible: false, inputValue: null})
  },
  onShow() {
    this.getTabBar().init()
    let that = this
    wx.getStorage({
      key: "nickName",
      success(res) {
        console.log(res)
        that.setData({
          nickName: res.data
        })
      }
    })
    wx.getStorage({
      key: "uid",
      success(res) {
        console.log(res)
        that.setData({
          uid: res.data
        })
      }
    })
  },
  onLoad(options) {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    wx.setStorageSync("nickName", this.data.nickName)
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

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