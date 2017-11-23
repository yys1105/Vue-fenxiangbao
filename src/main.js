// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import store from './vuex'
import http from './config/http'
import App from './App.vue'
import  { ToastPlugin } from 'vux'
import filters from './config/filters'

Vue.use(VueRouter)
Vue.use(http)
Vue.use(ToastPlugin)

FastClick.attach(document.body)

Vue.config.productionTip = false
for(let key of Object.keys(filters)) {
  Vue.filter(key, filters[key])
}
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
