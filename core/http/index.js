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
    Cookie:
      'szy_fourstar_science_web_key-token-config={%22tokenName%22:%22szy-fourstar-science-Auth%22%2C%22tokenStyle%22:%22uuid%22%2C%22cookieDomain%22:null%2C%22tokenPrefix%22:%22bearer%22%2C%22apiPBK%22:%22MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuM1sFh7ceS7lYiCKfS2874PY/3qMMnwN13x6aPoo4FHnJ0Cel23xa7AS5xR0U73ITMyiDnBaofblFWvAhZAS6C3VMoMwT/mt4rC72izuZr8NWl3Yn4BELandH4qw4dcD9jIqhi9wLuf53dvDBV42qLQJhk9SIhSS5eXftjh7Oh27Cw06NvCDeeme8W3cIqmmJ2z/AOyPZOBKKJgEphsaKxT9p5FSUoMSw5zKaTTOxitQ05aopv3iXKFGeHESKjcjNN6EMG3Md2oiAwVKdnOBuUmdcsSLOIsxOky7swT71jsLzJP8EcWu96mh16fm5qSUUfwfFmSCFlAf7sxSxwcgvwIDAQAB%22%2C%22webPRK%22:%22MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCM8ReB7EIKJTuINI478HoSIs+7HoY1HZlzGuRpEX2hRjXwU6tlpdTJ5FcLZ2xZH2bVbpdWOmXXVo2BGcFu79h+0UEmiTUKanRp+IxOr7j3xAqAoFQkHGmIh08hAlUbV+7ArICHSYElzjzcSCA798KjkHQP0X9sp2YCndf5ZfipjlgnFvYZNCbCBLmEMKQ7L8l9xOYWnyA53gpZNeVxNc0h1cworGokpGT6dDotjFI9VWkPC8mblQxKkdEGw/fvt3txDWYWZ6ruIfuz7Rlr9XfdCa2Uw3PplS7D7oRkaw891GIKpmXWM9yWu5c0fjPLKE1fcz8L6hxw66P9le+aDelbAgMBAAECggEAHsdnws+9fEm1PoF7rktN3TgM9WgtFtxn7mMpDmjrbpTOorUi8QfN+GkNOUhUuQHKi0Gjewk1xFj6ff8J5xgpx0gbWjcMhkHJOns06NonIrSFNqHMvjYWNeKWvTatL1N8qEcDqoe61G69i72UjIQG1YFuVyYBFdFYzal6yNQkAaLneIfOaetWCxmC7/qnryX8CmXySx2qDetn1577n2Ez5E5dn3Je0sO+fwmg7ab3NSgZudpIKAzyTyBdyaqw7CyseDGdsMWAnYlDFczwbMVeSEi8Ik2uxDrQoYl1StvyrygqRoAY1F1zv4MWNn0Lr9XfGvVYiT6QOv4N7rDv96CWAQKBgQDqwNzi/x4OKkdkSlr4RY0XoyDsdx6ygEZWYI8RJK23YnUoQ3Z9O8xipPlNSK9OLEUS0k5d9NJOJQG2mhoAbQfcSFCH3kMsYNgY/byOJ1BlahG5YbV6WcOHoa0fSePFpByV0Sk6/GcxA/LiBwxYXgvLb24cQmmQUSllNr99nQvaYQKBgQCZsqdGupwJBe6X4d+NKVXLdiauenC9FFyAQl4UAZsO7Gme7RTCCCLTfdTKa6mOp1PmA7c7PjV2z8zU19W1RuojAdmGdVSxcKK8zs1EQveVkVKZIrWFnoeVvcOiRZQRKjHVaBiVF4FBl9Awf6rFTVDmYGoZgtQW5mhdK+JYpmy1OwKBgQDOqOZLt0dgNPwQYBzhf2kMLAGp6dvOTHqfQ/Xuo5mCXVzCC1HeQaxWEuGdlaUubm6IeTegIwyY2p89fz/wrAtFcyvh0FrWUJMsvQMnKZjvDod36Xp3sVoepsffSY8IyMaZZT6kvNqjHdTOAmJt0K0VdI08t4JzF+AXSDEfhgePQQKBgHW47gDxq9QJdB9nRUgk8e7eN3CKndFlSBiBPPfL5w0+LQQqiSy4+JvPFG5amkuGhG94Rx8cXez76uLX0nt/rpRTtV4UfmNOZ4eASp7PQD2SSpa6jBilPSqHZ9HhwzCGhhb0HWgM0dcAxdhv4MgwmRdrn7iciYBkyGkc1Mib6EXDAoGBANh86Q9afHvtqcP71EKKqcjRQ1pB/iLEfZu3UulxJSZzq0w9xgPvtLGK8ExZKKUKY7c41avlDroR5ixjTVDfgDNUisJbtthIGoISfZ43vEvjxOvNXGuQgyUFx/s6DndscsjJXUpBJFpnFA0/y1kGcqcWSW8doHwlQhvK4ouH4Ij0%22%2C%22aesKey%22:%22szy-fourstar-science-Auth-aesKey%22%2C%22tokenData%22:{}}; Hm_lvt_ffaf1df555115102b054470bfa09354b=1709281139; sidebarStatus=0; Hm_lpvt_ffaf1df555115102b054470bfa09354b=1709287134',
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
