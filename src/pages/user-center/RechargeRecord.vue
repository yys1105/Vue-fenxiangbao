<script>
  import {Group} from 'vux'
  import MeCell from '../../componets/common/MeCell.vue'

  export default {
    name: 'rechargeRecord',
    components: {
      Group, MeCell
    },
    data() {
      return {
        recordList: [{
          icon: '/static/images/cash_recharge.png',
          name: '现金充值',
          inlineDesc: '2017.2.13 13:00:00',
          type: 'add',
          money: '6000'
        }, {
          icon: '/static/images/voucher_recharge.png',
          name: '代金券',
          inlineDesc: '2017.2.13 13:00:00',
          type: 'add',
          money: '9000'
        },{
          icon: '/static/images/cash_recharge.png',
          name: '现金充值',
          inlineDesc: '2017.2.13 13:00:00',
          type: 'add',
          money: '5000'
        }, {
          icon: '/static/images/voucher_recharge.png',
          name: '代金券',
          inlineDesc: '2017.2.13 13:00:00',
          type: 'add',
          money: '3000'
        }]
      }
    },
    filters: {
      typeFilter: function (value) {
        return value == 'add' ? '+' : '-'
      }
    }
  }
</script>

<template>
  <div>
    <group :gutter="0">
      <template v-for="item in recordList">
        <me-cell :title="item.name" :inline-desc="item.inlineDesc">
          <div slot="icon" class="icon-wrap">
            <img :src="item.icon">
          </div>
          <div class="value-text normal">{{item.type | typeFilter}} {{item.money}}</div>
        </me-cell>
      </template>
    </group>
  </div>
</template>

<style scoped lang="stylus">
  .icon-wrap
    width .44rem
    height .44rem
    line-height .44rem
    text-align center
    & > img
      vertical-align middle
      max-height 100%
      max-width 100%
      display block

  .value-text
    font-size .14rem
</style>
