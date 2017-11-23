<script>
  import {Swipeout, SwipeoutItem, SwipeoutButton, CheckIcon, XNumber, Group} from 'vux'

  export default {
    name: 'goodsInCart',
    components: {
      SwipeoutItem, SwipeoutButton, CheckIcon, XNumber, Group
    },
    props:{
      goodsData:{
        type:Object,
        default:function () {
          return {
            id:'',
            goodsImg:'',
            goodsName:'',
            number:1,
            price:0,
            checkFlag:false
          }
        }
      }
    },
    data() {
      return {
        sonData:this.goodsData,
        roundValue:this.goodsData.number
      }
    },
    watch:{

    },
    computed:{
      totalPrice: function () {
        return this.goodsData.number*this.goodsData.price
      }
    },
    methods:{
      deleteItem(){
        this.$emit('deleteItem', this.goodsData.id)
      }
    }
  }
</script>

<template>
  <swipeout-item transition-mode="follow">
    <div slot="right-menu">
      <swipeout-button @click.native="deleteItem" type="warn"><i class="iconfont icon-shanchu"></i> 删除
      </swipeout-button>
    </div>
    <div slot="content" class="goods-con">
      <check-icon :value.sync="goodsData.checkFlag" class="goods-check-wrap">
        <div class="goods-img-wrap">
          <img :src="goodsData.goodsImg">
        </div>
      </check-icon>
      <div class="goods-info">
        <div class="goods-name text-overflow">{{ goodsData.goodsName }}</div>
        <div class="number-and-price clearfix">
          <div class="number">
            <group :gutter="0" class="border-plain">
              <x-number title="数量" v-model="goodsData.number" button-style="round" :min="1"></x-number>
            </group>
          </div>
          <div class="price">￥ {{ totalPrice | numeralFormat }}</div>
        </div>
      </div>
    </div>
  </swipeout-item>
</template>


<style scoped lang="stylus">
  @import "../../assets/style/variables.styl"
  .goods-con
    padding .1rem .1rem .1rem 1.43rem
    position relative
    .goods-check-wrap
      position absolute
      top .14rem
      left .14rem
      .goods-img-wrap
        display inline-block
        width .8rem
        height .8rem
        line-height .87rem
        text-align center
        & > img
          max-width 100%
          max-height 100%
          vertical-align middle
    .goods-info
      .goods-name
        color $dark
        font-size .16rem
      .number-and-price
        padding .1rem 0
        .number
          float left
          width 1.25rem
        .price
          float right
          font-size .14rem
          color $red
          line-height .3rem
</style>
<style lang="stylus">
  @import "../../assets/style/variables.styl"
  .border-plain
    font-size .14rem
    .weui-cells:before
      border-top 1px solid #fff
    .weui-cells:after
      border-bottom 1px solid #fff
    .weui-cells
      font-size .14rem
      color $dark
      .weui-cell
        padding 0.02rem 0

  .vux-number-input
    font-size .14rem !important
    width 35px !important
</style>
