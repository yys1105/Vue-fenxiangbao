<script>
  import { Swipeout, SwipeoutItem, SwipeoutButton,CheckIcon  } from 'vux'
  export default {
    name: 'shoppingCart',
    components:{
      Swipeout, SwipeoutItem, SwipeoutButton,CheckIcon
    },
    data() {
      return {
        goods:false
      }
    }
  }
</script>

<template>
  <div>
    <swipeout>
      <div class="swipeout-item-wrap">
        <swipeout-item transition-mode="follow">
          <div slot="right-menu">
            <swipeout-button @click.native="onButtonClick('fav')" type="warn">删除</swipeout-button>
          </div>
          <div slot="content" class="goods-con">
            <check-icon :value.sync="goods" class="goods-check-wrap">
              <div class="goods-img-wrap">
                <img src="http://dummyimage.com/200x200" alt="">
              </div>
            </check-icon>
            <div class="goods-info">
              <div class="goods-name">太太美容口服液</div>
            </div>
          </div>
        </swipeout-item>
      </div>
    </swipeout>
  </div>
</template>


<style scoped lang="stylus">
  @import "../../assets/style/variables.styl"
  .swipeout-item-wrap
    margin-bottom 10px
  .goods-con
    padding .14rem .14rem .14rem 1.5rem
    position relative
    .goods-check-wrap
      position absolute
      top .14rem
      left .14rem
      .goods-img-wrap
        display inline-block
        width .87rem
        height .87rem
        line-height .87rem
        text-align center
        &>img
          max-width 100%
          max-height 100%
          vertical-align middle
    .goods-info
      height .9rem
      .goods-name
        color $dark
        font-size .16rem
</style>
