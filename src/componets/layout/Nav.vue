<script>
  import {Tabbar, TabbarItem} from 'vux'

  export default {
    name: 'nav',
    components:{
      Tabbar,
      TabbarItem
    },
    data() {
      return {}
    }
  }
</script>

<template>
  <div>
    <tabbar>
      <tabbar-item :link="{path:'/'}" :selected="$route.path === '/'">
        <img slot="icon" src="/static/images/home_normal.png">
        <img slot="icon-active" src="/static/images/home_selected.png">
        <span slot="label" class="label-active">首页</span>
      </tabbar-item>
      <tabbar-item :link="{path:'/ww'}" :selected="$route.path === '/ww'">
        <img slot="icon" src="/static/images/shop_normal.png">
        <img slot="icon-active" src="/static/images/shop_selected.png">
        <span slot="label" class="label-active">购物车</span>
      </tabbar-item>
      <tabbar-item :link="{path:'/homePage'}" :selected="$route.path === '/homePage'">
        <img slot="icon" src="/static/images/person_normal.png">
        <img slot="icon-active" src="/static/images/person_selected.png">
        <span slot="label" class="label-active">个人中心</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>


<style scoped lang="stylus">
  @import "../../assets/style/variables.styl"
  .weui-bar__item_on
    .label-active
      color $sky-blue
</style>
