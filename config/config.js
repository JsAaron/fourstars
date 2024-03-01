const DOMAIN = 'https://fourstars.net.cn'

import $cwPlatform from '@/core/platform'

const IS_AGENT_MODE = $cwPlatform.is_dev && $cwPlatform.is_h5

const config = {
  //基础地址
  baseRoot: IS_AGENT_MODE ? '/base-api' : DOMAIN
}

export default config
