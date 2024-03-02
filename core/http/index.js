import Vue from 'vue'

let inRequest = false

const request = async function (args = {}) {
  // 去掉大小写
  let method = args.method || 'GET'
  if (args.method) {
    if (method == 'post') {
      method = 'POST'
    }
    if (method == 'get') {
      method = 'GET'
    }
  }

  let popError = !!args.popError
  let hasCache = args.cache == true ? true : false

  const header = {
    'X-Requested-With':
      args.header && args.header['X-Requested-With'] ? args.header['X-Requested-With'] : 'XMLHttpRequest',
    'X-App-Version': Vue.prototype.$appVersion,
    'content-type': method == 'GET' ? 'application/x-www-form-urlencoded' : 'application/json;charset=UTF-8'
  }

  if (args.type == 'JSON') {
    header['content-type'] = 'application/json;charset=UTF-8'
  }

  if (args.type == 'FORM') {
    header['content-type'] = 'application/x-www-form-urlencoded'
  }

  const requestUrl = async () => {
    const [error, response] = await uni.request({
      url: args.url,
      method: method,
      data: args.data,
      header: header
    })

    if (error) {
      let msg = {
        code: 400,
        msg: error.errMsg,
        data: error
      }
      // console.log('error',error)
      // alertError(msg);
      uni.$emit('z-paging-error-emit')
      return Promise.reject(msg)
    }
    // console.log(11, response)
    const repData = response.data

    if (repData.code == '200' || repData.code == '0000') {
      return Promise.resolve(repData.data)
    } else {
      if (popError) {
        // $cwHelper.throwError(repData.msg)
      }
      console.log('api请求错误', args.url)
      uni.$emit('z-paging-error-emit')
      return Promise.reject(repData.msg)
    }
  }
  // console.log('inRequest',inRequest)

  // 如果在请求中
  if (inRequest) {
    uni.$emit('z-paging-error-emit')
    return Promise.reject()
  }

  return requestUrl()
}

const alertError = function (error) {
  let confirmText = '刷新页面'
  // #ifdef MP-ALIPAY
  confirmText = '确认'
  // #endif
  uni.showModal({
    title: '网络错误',
    content: '网络开了小差，请刷新重试下哦~',
    cancelText: '复制错误',
    confirmText: confirmText,
    success: e => {
      if (e.cancel) {
        let data =
          `code: ${error.code}, \r\nmsg: ${error.msg}, \r\ndetail: ` +
          (error.data ? (typeof error.data === 'string' ? error.data : JSON.stringify(error.data)) : null)
        uni.setClipboardData({
          data: data,
          fail(e) {
            console.log('错误复制失败', e)
          }
        })
      }
    }
  })
}

export async function requestSync(args, errorExt = '') {
  return await to(request(args), errorExt)
}

export default request
