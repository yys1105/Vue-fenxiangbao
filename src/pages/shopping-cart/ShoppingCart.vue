<script>
  import {Swipeout, CheckIcon, XButton} from 'vux'
  import GoodsInCart from './_GoodsInCart.vue'
  import numeral from 'numeral'

  export default {
    name: 'shoppingCart',
    components: {
      Swipeout, CheckIcon, XButton, GoodsInCart
    },
    data() {
      return {
        cartList: [{
          id: '1',
          goodsImg: 'http://dummyimage.com/200x200',
          goodsName: 'Laura Ashley 床品套件/四件套/多件套',
          number: 20,
          price: 199.9,
          checkFlag: false
        },{
          id: '2',
          goodsImg: 'http://dummyimage.com/200x200',
          goodsName: 'ELLA MOSS品牌的潮流性感吊带背心',
          number: 10,
          price: 299.9,
          checkFlag: false
        },{
          id: '3',
          goodsImg: 'http://dummyimage.com/200x200',
          goodsName: 'ELLA MOSS品牌的潮流性感吊带背心',
          number: 40,
          price: 239.9,
          checkFlag: false
        },{
          id: '4',
          goodsImg: 'http://dummyimage.com/200x200',
          goodsName: 'ELLA MOSS品牌的潮流性感吊带背心',
          number: 33,
          price: 129.9,
          checkFlag: false
        },{
          id: '5',
          goodsImg: 'http://dummyimage.com/200x200',
          goodsName: 'ELLA MOSS品牌的潮流性感吊带背心',
          number: 11,
          price: 129.9,
          checkFlag: false
        }],
        checkAll: false,

        totalPrice: 0
      }
    },
    methods: {
      deleteItem(val) {
        for (let item of this.cartList) {
          if (item.id === val) {
            this.cartList.splice(item.index, 1)
          }
        }
      },
    },
    computed: {
      // 全选checkbox绑定的model
      selectAll: {
        get: function () {
          return this.selectCount == this.cartList.length && this.cartList.length !== 0;
          return false;
        },
        set: function (value) {
          this.cartList.forEach(function (item) {
            item.checkFlag = value;
          });
          return value;
        }
      },
      //选中的数量
      selectCount: {
        get: function () {
          var i = 0;
          this.cartList.forEach(function (item) {
            if (item.checkFlag) {
              i++;
            }
          });
          return i;
        }
      },
      //选中的数组
      checkedGroups: {
        get: function () {
          var checkedGroups = [];
          this.cartList.forEach(function (item) {
            if (item.checkFlag) {
              checkedGroups.push(item);
            }
          });
          return checkedGroups;
        }
      }
    },
    watch: {
      'cartList': {
        deep: true,
        handler(val, oldVal) {
          let total = 0
          val.forEach(item => {
            item.checkFlag && (total += item.number * item.price)
          })
          this.totalPrice = total
        }
      }
    }
  }
</script>

<template>
  <div>
    <div class="goods-list">
      <swipeout>
        <template v-for="item in cartList">
          <div class="swipeout-item-wrap">
            <goods-in-cart :goodsData="item" v-on:deleteItem="deleteItem"></goods-in-cart>
          </div>
        </template>
      </swipeout>
    </div>
    <div class="total-bar">
      <div class="row">
        <div class="col-3">
          <check-icon :value.sync="selectAll">
            <span class="select-all-text">全选</span>
          </check-icon>
        </div>
        <div class="col-5">
          <div class="total-num-wrap">
            总计： <span class="num">￥{{ totalPrice | numeralFormat }}</span>
          </div>
        </div>
        <div class="col-4">
          <div class="submit-button">
            <x-button type="primary" style="border-radius:99px;"><span class="button-text">去结算</span></x-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped lang="stylus">
  @import "../../assets/style/variables.styl"
  .goods-list
    padding-bottom .71rem
    .swipeout-item-wrap
      margin-bottom 10px

  .total-bar
    width 100%
    height .71rem
    line-height .71rem
    background-color #fff
    position fixed
    left 0
    bottom 48px
    z-index 99
    .select-all-text
      font-size .14rem
      color $dark
    .total-num-wrap
      text-align right
      color $dark
      .num
        color $red
    .submit-button
      padding .14rem .15rem
      .button-text
        font-size .14rem
</style>
