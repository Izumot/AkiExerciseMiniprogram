// app.js

const {
  userApi
} = require('./api/index')

App({
  onLaunch() {
    // 登录
    // wx.login({
    //   success: (res) => {
    //     console.log(res)
    //     let code = res.code
    //     wx.request({
    //       url: `http://127.0.0.1:8000/login?code=${code}`,
    //       method: 'GET',
    //       success: (res) => {
    //         console.log(res)
    //         this.globalData.token = res.data
    //       }
    //     })
    //   },
    // })
  },

  globalData: {
    token: ''
  }
})