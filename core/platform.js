const device = uni.getSystemInfoSync()

// 获取小程序胶囊信息
const getCapsule = () => {
  // #ifdef MP
  let capsule = uni.getMenuButtonBoundingClientRect()
  if (!capsule) {
    capsule = {
      bottom: 56,
      height: 32,
      left: 278,
      right: 365,
      top: 24,
      width: 87
    }
  }
  return capsule
  // #endif
}

const capsule = getCapsule() || {}

// 标题栏高度
const getNavBar = () => {
  return device.statusBarHeight + 44
}

const client = device.platform

const platInfo = {
  capsule,
  device,
  client,
  is_dev: process.env.NODE_ENV === 'development',
  is_prod: process.env.NODE_ENV === 'production',
  navbarHeight: getNavBar(),
  statusBarHeight: device.statusBarHeight
}

//运行环境
function mixPlat(identify) {
  identify = 'is_' + identify
  // all
  platInfo[identify] = true
  // 开发环境
  if (client == 'devtools') {
    platInfo[identify + '_devtools'] = true
  }
  // ios
  if (client == 'ios') {
    platInfo[identify + '_ios'] = true
  }
  // 安卓
  if (client == 'android') {
    platInfo[identify + '_android'] = true
  }
}

function initInfo(identify) {
  identify = 'is_' + identify
  platInfo[identify] = false
  platInfo[identify + '_ios'] = false
  platInfo[identify + '_android'] = false
}

initInfo('h5')
initInfo('app')
initInfo('mp_weixin')

//#ifdef H5
mixPlat('h5')
//#endif

//#ifdef APP-PLUS
mixPlat('app')
//#endif

//#ifdef MP-WEIXIN
mixPlat('mp_weixin')
//#endif

// console.log('🚀 ~ file: index.js:83 ~ platInfo:', platInfo)

export default platInfo
