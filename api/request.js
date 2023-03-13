// 引入状态码statusCode
const statusCode = require('./statusCode')
// 定义请求路径, BASEURL: 普通请求API; CBASEURL: 中台API,不使用中台可不引入CBASEURL
const {
  BASEURL
} = require('./config')

/**
 * 发送请求
 * @params
 * method: <String> 请求方式: POST/GET
 * url: <String> 请求路径
 * data: <Object> 请求参数
 * ignoreToken: <Boolean> 是否忽略token验证
 * form: <Boolean> 是否使用formData请求
 */
function request(options) {
  let {
    method,
    url,
    data,
    ignoreToken,
    form
  } = options
  const app = getApp()
  // 设置请求头
  let header = {}
  if (form) {
    header = {
      'content-type': 'application/x-www-form-urlencoded'
    }
  } else {
    header = {
      'content-type': 'application/json' //自定义请求头信息
    }
  }
  if (!ignoreToken) {
    // 从全局变量中获取token
    let token = app.globalData.token
    header.token = token
  }

  return new Promise((resolve, reject) => {
    console.log('request', url,data);
    wx.request({
      data,
      url: BASEURL + url,
      header,
      method,
      success: (res) => {
        let {
          statusCode: code
        } = res
        if (code === statusCode.SUCCESS) {
          resolve(res.data)
        } else if (code === statusCode.EXPIRE) {
          app.globalData.token = ''
          showToast(`登录过期, 请重新进入小程序`)
          reject(res.data)
        } else {
          showToast(`请求错误${url}, CODE: ${code}`)
          reject(res.data)
        }
      },
      fail: (err) => {
        console.log('%c err', 'color: red;font-weight: bold', err)
        showToast(err.errMsg)
        reject(err)
      }
    })
  })
}

// 封装toast函数
function showToast(title, icon = 'none', duration = 2500, mask = false) {
  wx.showToast({
    title: title || '',
    icon,
    duration,
    mask
  });
}

function get(options) {
  console.log("get :", options)
  return request({
    method: 'GET',
    ...options
  })
}

function post(options) {
  // url, data = {}, ignoreToken, form
  return request({
    method: 'POST',
    ...options
  })
}

function put(options) {
  return request({
    method: 'PUT',
    ...options
  })
}

function del(options) {
  return request({
    method: 'DELETE',
    ...options
  })
}
module.exports = {
  request,
  get,
  post,
  put,
  del
}