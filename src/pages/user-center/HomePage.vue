<script>
  import {Group} from 'vux'
  import MeCell from '../../componets/common/MeCell.vue'

  export default {
    name: 'homePage',
    components: {
      Group, MeCell
    },
    data() {
      return {}
    }
  }
</script>

<template>
  <div>
    <div class="my-info-wrap">
      <div class="sign-out clearfix">
        <div class="sign-out-button"><span class="iconfont icon-exit"></span> 退出</div>
      </div>
      <div class="head-img-wrap" @click="$router.push({name:'MyData'})">
        <img src="/static/images/per_photo.png">
      </div>
      <div class="user-name-wrap">三语一页书</div>
    </div>

    <group :gutter="10" class="user-cell">
      <me-cell title="个人信息" link="/homePage/myData/userInfo">
        <div slot="icon">
          <img class="icon" src="/static/images/per_msg.png">
        </div>
      </me-cell>
      <me-cell title="我的银行卡" link="/">
        <div slot="icon">
          <img class="icon" src="/static/images/per_card.png">
        </div>
      </me-cell>
      <me-cell title="我的订单" link="/">
        <div slot="icon">
          <img class="icon" src="/static/images/per_order.png">
        </div>
      </me-cell>
      <me-cell title="我的地址" link="/">
        <div slot="icon">
          <img class="icon" src="/static/images/per_address.png">
        </div>
      </me-cell>
      <me-cell title="安全中心" link="/">
        <div slot="icon">
          <img class="icon" src="/static/images/per_safe.png">
        </div>
      </me-cell>
    </group>
  </div>
</template>


<style scoped lang="stylus">
  @import "../../assets/style/variables.styl"
  .my-info-wrap
    width 100%
    height 1.75rem
    background-image url("/static/images/per_bg.png")
    background-repeat no-repeat
    background-size 100% auto
    .sign-out-button
      float right
      line-height .45rem
      height .45rem
      margin-right .14rem
      color #fff
      font-size .14rem
    .head-img-wrap
      width .64rem
      height .64rem
      border-radius .32rem
      margin .06rem auto
      background-color #fff
      & > img
        width 100%
    .user-name-wrap
      text-align center
      line-height .32rem
      font-size .14rem
      color #fff
  .user-cell
    .icon
      width .28rem
      height .28rem
      display block
</style>
