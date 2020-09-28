import Vue from 'vue'
import router from './router'
import './plugins/element.js'
import App from './App.vue'
import './assets/css/global.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
