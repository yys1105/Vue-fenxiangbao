<script>
  export default {
    name: 'goods',
    props:{
      data:{
        type:Object,
        default:{
          goodsId:'',
          imgSrc:'',
          price:'',
          text:''
        }
      }
    },
    data() {
      return {}
    }
  }
</script>

<template>
  <div class="goods--wrap">
    <div class="goods-img">
      <img :src="data.imgSrc">
    </div>
    <div class="goods-info-wrap">
      <div class="goods-name">{{ data.text }}</div>
      <div class="goods-price">￥ {{ data.price }}</div>
    </div>
  </div>
</template>


<style scoped lang="stylus">
  @import "../../assets/style/variables.styl"
  .goods--wrap
    width 100%
    background-color #fff
    .goods-img
      width 100%
      height 1.735rem
      line-height 1.735rem
      text-align center
      &>img
        vertical-align middle
        max-width 100%
        max-height 1.735rem
    .goods-info-wrap
      padding 0 .065rem
      .goods-name
        font-size .12rem
        color $dark
      .goods-price
        font-size .14rem
        color $red
        line-height .3rem
</style>
