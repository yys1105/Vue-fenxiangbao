import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home.vue'
import HomePage from '../pages/user-center/HomePage.vue'
import MyData from '../pages/user-center/MyData.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Home', component: Home, meta: {}},
    {path: '/homePage', name: 'HomePage', component: HomePage, meta: {}},
    {path: '/homePage/myData', name: 'MyData', component: MyData, meta: {title:'我的资料'}},
  ]
})
