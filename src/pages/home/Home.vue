<script>
  import SearchBar from './_SearchBar.vue'
  import Swiper from './_Swiper.vue'
  import Goods from './_goods.vue'
  import { Group, Flexbox, FlexboxItem } from 'vux'

  export default {
    name: 'home',
    components: {
      SearchBar,
      Swiper,
      Goods,
      Group,
      Flexbox,
      FlexboxItem
    },
    data() {
      return {
        linkList:[{
          linkName:'Home',
          icon:'/static/images/home_fenxiangbao.png',
          label:'分享宝'
        },{
          linkName:'Home',
          icon:'/static/images/home_baoleba.png',
          label:'报了吧'
        },{
          linkName:'Home',
          icon:'/static/images/home_changlegou.png',
          label:'厂乐购'
        },{
          linkName:'Home',
          icon:'/static/images/home_register.png',
          label:'注册'
        }],
        goodsList:[]
      }
    },
    methods: {
      getGoodsList(){
        this.$httpPost('/api/getGoodsList',{
        }).then((data)=>{
          this.goodsList = data.data.list
        }).catch(err=>{
          this.$vux.toast.text(err.message,'middle')
        })
      }
    },
    created() {
      this.getGoodsList()
    }
  }
</script>

<template>
  <div>
    <!--搜索栏-->
    <div>
      <search-bar></search-bar>
    </div>
    <!--广告轮播图-->
    <div>
      <swiper></swiper>
    </div>
    <!--链接跳转-->
    <group :gutter="10">
      <flexbox class="icon-link">
        <template v-for="item in linkList">
          <flexbox-item>
            <div class="icon-link-wrap" @click="$router.push({name:item.linkName})">
              <div class="icon-img">
                <img :src="item.icon">
              </div>
              <div class="icon-text">{{ item.label }}</div>
            </div>
          </flexbox-item>
        </template>
      </flexbox>
    </group>
    <!--商品列表-->
    <div class="goods-list-wrap">
      <div class="row">
        <template v-for="item in goodsList">
          <div class="col-6">
            <div class="goods-item-wrap">
              <goods :data="item"></goods>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  @import "../../assets/style/variables.styl"
  .icon-link
    .icon-link-wrap
      padding .13rem 0
      text-align center
    .icon-img
      width .48rem
      margin 0 auto .1rem auto
      &>img
        display block
        width 100%
    .icon-text
      text-align center
      line-height .14rem
      font-size .14rem
      color $dark
  .goods-list-wrap
    padding 3px 0
    display block
    height auto
    .goods-item-wrap
      margin 7px
</style>
