// app.js

App({
  onLaunch() {
    // 登录
    wx.login({
      timeout: 2000,
      success(res) {
        console.log(res)
        let code = res.code
        wx.request({
          url: 'https://api.aki.codes/login',
          method: "POST",
          data: { code: code},
          success(res) {
            console.log(res)
            wx.setStorageSync('uid', res.data.uid)
            wx.setStorageSync('nickName', res.data.nickName)
          }
        })
      }
    })
  },
  globalData: {
    
  }
})
