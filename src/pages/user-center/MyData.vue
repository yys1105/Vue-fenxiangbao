<script>
  import {Group} from 'vux'
  import MeCell from '../../componets/common/MeCell.vue'
  export default {
    name: 'myData',
    components:{
      Group,
      MeCell
    },
    data() {
      return {}
    }
  }
</script>

<template>
  <div>
    <group :gutter="0">
      <me-cell title="头像" link="/homePage">
        <div class="head-img-wrap cell-value">
          <img src="/static/images/per_photo.png">
        </div>
      </me-cell>
    </group>

    <group :gutter="10">
      <me-cell title="用户名" link="/homePage">
        <div class="cell-value">赵云</div>
      </me-cell>
      <me-cell title="手机号" link="/homePage">
        <div class="cell-value">18306133926</div>
      </me-cell>
      <me-cell title="邮箱" link="/homePage">
        <div class="cell-value">1791566096@qq.com</div>
      </me-cell>
      <me-cell title="推荐码" link="/homePage">
        <div class="cell-value"></div>
      </me-cell>
      <me-cell title="团队代码" link="/homePage">
        <div class="cell-value"></div>
      </me-cell>
    </group>
  </div>
</template>


<style scoped lang="stylus">
  .head-img-wrap
    width .64rem
    height .64rem
    border-radius .32rem
    margin .06rem auto
    background-color #fff
    & > img
      width 100%
  .cell-value
    padding-right .14rem
</style>
