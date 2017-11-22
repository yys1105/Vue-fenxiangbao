<script>
  import {Group} from 'vux'
  import MeCellCard from '../../componets/common/MeCellCard'
  import MeCell from '../../componets/common/MeCell.vue'
  export default {
    name: 'myPurse',
    components:{
      Group,MeCellCard,MeCell
    },
    data() {
      return {}
    }
  }
</script>

<template>
  <div>
    <group :gutter="0">
      <div class="row card-link-wrap">
        <div class="col-6">
          <div class="card-link">
            <img src="/static/images/btn_recharge.png">
          </div>
        </div>
        <div class="col-6">
          <div class="card-link">
            <img src="/static/images/btn_withdraw.png">
          </div>
        </div>
      </div>
    </group>

    <group :gutter="10">
      <me-cell-card>
        <div slot="header">
          <me-cell>
            <div slot="title" class="title-wrap">现金</div>
            <div slot="icon" class="icon-wrap">
              <img src="/static/images/cash.png">
            </div>
            <div class="value-text">账户状态： <span class="normal">正常</span></div>
          </me-cell>
        </div>
        <div class="row card-info">
          <div class="col-6">
            <div class="money default">
              ￥89,898.00
            </div>
            <div class="explain">
              余额（元）
            </div>
          </div>
          <div class="col-6">
            <div class="money danger">
              ￥89,898.00
            </div>
            <div class="explain">
              冻结余额（元）
            </div>
          </div>
        </div>
      </me-cell-card>
    </group>
    <group :gutter="10">
      <me-cell-card>
        <div slot="header">
          <me-cell>
            <div slot="title" class="title-wrap">代金券</div>
            <div slot="icon" class="icon-wrap">
              <img src="/static/images/voucher.png">
            </div>
            <div class="value-text">账户状态： <span class="warning">禁用</span></div>
          </me-cell>
        </div>
        <div class="row card-info">
          <div class="col-6">
            <div class="money default">
              ￥89,898.00
            </div>
            <div class="explain">
              余额（元）
            </div>
          </div>
          <div class="col-6">
            <div class="money danger">
              ￥89,898.00
            </div>
            <div class="explain">
              冻结余额（元）
            </div>
          </div>
        </div>
      </me-cell-card>
    </group>
  </div>
</template>

<style scoped lang="stylus">
  @import "../../assets/style/variables.styl"
  .card-link-wrap
    padding .2rem .35rem
    .card-link
      width 1.05rem
      margin 0 auto
      &>img
        width 100%
  .title-wrap
    font-size .18rem
    line-height .28rem
  .icon-wrap
    width .28rem
    height .28rem
    line-height .28rem
    text-align center
    &>img
      vertical-align middle
      max-height 100%
      max-width 100%
      display block
  .value-text
    font-size .16rem
    color $lightDark
  .card-info
    text-align center
    padding .1rem 0
    .money
      line-height .3rem
    .explain
      color $dark
      line-height .3rem
      font-size .14rem
</style>
