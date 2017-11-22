<script>
  import {Group,Flexbox,FlexboxItem} from 'vux'
  export default {
    name: 'userInfo',
    components:{
      Group,Flexbox,FlexboxItem
    },
    data() {
      return {
        linkList:[{
          linkName:'NameIdentify',
          icon:'/static/images/per_verify.png',
          label:'实名认证'
        },{
          linkName:'MyPurse',
          icon:'/static/images/per_wallet.png',
          label:'我的钱包'
        },{
          linkName:'RechargeRecord',
          icon:'/static/images/per_recharge.png',
          label:'充值纪录'
        },{
          linkName:'RechargeRecord',
          icon:'/static/images/per_consume.png',
          label:'消费纪录'
        },{
          linkName:'RechargeRecord',
          icon:'/static/images/per_finance.png',
          label:'财务流水'
        },{
          linkName:'RechargeRecord',
          icon:'/static/images/per_withdraw.png',
          label:'提现纪录'
        }],
      }
    }
  }
</script>

<template>
  <div>
    <group :gutter="10">
      <flexbox :gutter="0" wrap="wrap" class="icon-link">
        <template v-for="item in linkList">
          <flexbox-item :span="1/4">
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
  </div>
</template>


<style scoped lang="stylus">
  @import "../../assets/style/variables.styl"
  .icon-link
    .icon-link-wrap
      padding .13rem 0
    .icon-img
      margin-top .1rem
      height .21rem
      text-align center
      &>img
        height 100%
    .icon-text
      text-align center
      line-height .3rem
      font-size .14rem
      color $dark
</style>
