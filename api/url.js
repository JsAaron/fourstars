import $config from '@/config/config'

let apiUrl = {
  classifyCenter: {
    getIndustryList: '/api/website/industry/list'
  }
}

export function spliceUrl(ip, apiUrl) {
  let newUrl = {}
  for (let k in apiUrl) {
    let newOb = {
      [k]: {}
    }
    for (let i in apiUrl[k]) {
      newOb[k][i] = `${ip}${apiUrl[k][i]}`
    }
    newUrl[k] = newOb[k]
  }
  return newUrl
}

// apiUrl = spliceUrl($config.baseRoot, apiUrl)

// const apiUrls = Object.assign(apiUrl)

export default apiUrl
