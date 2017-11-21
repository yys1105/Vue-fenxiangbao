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
      <flexbox :gutter="0" wrap="wrap">
        <template v-for="item in goodsList">
          <flexbox-item :span="1/2">
            <div class="goods-item-wrap">
              <goods :data="item"></goods>
            </div>
          </flexbox-item>
        </template>
      </flexbox>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  @import "../../assets/style/variables.styl"
  .icon-link
    .icon-link-wrap
      padding .13rem .2rem
    .icon-img
      width 100%
      &>img
        width 100%
    .icon-text
      text-align center
      line-height .1.4rem
      font-size .1rem
      color $dark
  .goods-list-wrap
    padding .03rem 0
    .goods-item-wrap
      padding .07rem
</style>
