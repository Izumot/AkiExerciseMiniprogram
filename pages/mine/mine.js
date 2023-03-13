// pages/mine/mine.js

const {
  userApi
} = require("../../api/index");

Page({
  data: {
    uid: null,
    nickName: null,
    cur: {},
    visible: false,
    inputValue: null,
  },
  handlePopup(e) {
    const {
      item
    } = e.currentTarget.dataset;
    console.log(e)
    this.setData({
        cur: item,
      },
      () => {
        this.setData({
          visible: true
        });
      },
    );
  },
  onInputBlur(e) {
    console.log(e)
    this.setData({
      inputValue: e.detail.value
    })
  },
  onInputClear(e) {
    console.log(e)
    this.setData({
      inputValue: null
    })
  },
  onVisibleChange(e) {
    this.setData({
      visible: e.detail.visible,
      inputValue: null
    });
  },
  onPopupCancelTap(e) {
    this.setData({
      visible: false,
      inputValue: null
    })
  },
  onPopupConfirmTap(e) {
    let inputValue = this.data.inputValue
    if (inputValue) {
      let nickname = inputValue
      
      userApi.updateUserMe(nickname).then(res => {
        console.log("update nickname success!")
        console.log(res)
        this.setData({
          nickName: res.nickname
        })
      }).catch(err => {
        console.log(err)
      })
    }
    this.setData({
      visible: false,
      inputValue: null
    })
  },
  onShow() {
    this.getTabBar().init()

  },
  onLoad(options) {
    userApi.readUserMe().then(res => {
      console.log(res)
      this.setData({
        uid: res.user_id,
        nickName: res.nickname
      })
    }).catch(err => {
      console.log(err)
    })

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

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