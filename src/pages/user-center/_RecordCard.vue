<script>
  export default {
    name: 'recordCard',
    data() {
      return {}
    }
  }
</script>

<template>
  <div class="card">
    <div class="header clearfix">
      <div class="left">
        充值流水号：1111111111111111111
      </div>
      <div class="right">
        状态：<span class="normal">正常</span>
      </div>
    </div>
    <div class="body">
      <div class="card-type">
          <img src="/static/images/cash.png">现金
      </div>
      <div class="money">￥80000</div>
    </div>
    <div class="footer clearfix">
      <div class="left">
        创建时间：2017-6-20 9:00:00
      </div>
      <div class="right">
        付款时间：2017-6-20 9:00:00
      </div>
    </div>
  </div>
</template>

<style scoped lang="stylus">
  @import "../../assets/style/variables.styl"
  .card
    border-radius .05rem
    padding 0 .14rem
    background-color #fff
    .header
      border-bottom 1px dashed #cccccc
      line-height .3rem
      font-size .12rem
      color $dark
    .body
      padding .26rem 0
      text-align center
      .card-type
        line-height .4rem
        letter-spacing 1px
        font-size .2rem
        img
          margin-right .1rem
          height .3rem
          vertical-align middle
      .money
        line-height .3rem
        font-size .18rem
        color $red
    .footer
      border-top 1px dashed #cccccc
      font-size .1rem
      color $dark
      line-height .3rem
</style>
