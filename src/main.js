import Vue from 'vue'
import router from './router'
import './plugins/element.js'
import App from './App.vue'
import './assets/fonts/iconfont.css'
import './assets/css/global.css'

import axios from 'axios'
// 在axios中封装根目录叫http,全局都可以用
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
