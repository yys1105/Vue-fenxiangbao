import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home.vue'
import HomePage from '../pages/user-center/HomePage.vue'
import MyData from '../pages/user-center/MyData.vue'
import UserInfo from '../pages/user-center/UserInfo.vue'
import NameIdentify from '../pages/user-center/NameIdentify.vue'
import MyPurse from '../pages/user-center/MyPurse.vue'
import RechargeRecord from '../pages/user-center/RechargeRecord.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Home', component: Home, meta: {}},
    {path: '/homePage', name: 'HomePage', component: HomePage, meta: {}},
    {path: '/homePage/myData', name: 'MyData', component: MyData, meta: {title:'我的资料'}},
    {path: '/homePage/myData/userInfo', name: 'UserInfo', component: UserInfo, meta: {title:'个人信息'}},
    {path: '/homePage/myData/userInfo/nameIdentify', name: 'NameIdentify', component: NameIdentify, meta: {title:'实名认证信息'}},
    {path: '/homePage/myData/userInfo/myPurse', name: 'MyPurse', component: MyPurse, meta: {title:'我的钱包'}},
    {path: '/homePage/myData/userInfo/rechargeRecord', name: 'RechargeRecord', component: RechargeRecord, meta: {title:'充值纪录'}},
  ]
})
