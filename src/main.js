import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 解决移动端300ms延迟
import FastClick from 'fastclick'


Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

// 解决移动端300ms延迟
FastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
