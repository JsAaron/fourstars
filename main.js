import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import $api from '@/api'
import Mock from '@/mock/index'

Vue.config.productionTip = false
App.mpType = 'app'

Vue.prototype.$api = $api

Vue.use(ElementUI)

const app = new Vue({
  ...App
})
app.$mount()
