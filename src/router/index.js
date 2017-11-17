import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home.vue'
import GoodsDetails from '../pages/goods/GoodsDetails.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Home', component: Home, meta: { title: "首页"}},
    {path: '/goodsDetails/:goodsId', name: 'GoodsDetails', component: GoodsDetails, meta: { title: "商品详情"}},
  ]
})
