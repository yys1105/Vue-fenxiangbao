<script>
  import SearchBar from './_SearchBar.vue'
  import Swiper from './_Swiper.vue'
  import { Group, Flexbox, FlexboxItem } from 'vux'

  export default {
    name: 'home',
    components: {
      SearchBar,
      Swiper,
      Group,
      Flexbox,
      FlexboxItem
    },
    data() {
      return {}
    },
    methods: {
      search(val) {
        console.log(val)
      }
    },
    created() {
    }
  }
</script>

<template>
  <div>
    <div>
      <search-bar @search="search"></search-bar>
    </div>
    <div>
      <swiper></swiper>
    </div>
    <group :gutter="10">
      <flexbox class="icon-link">
        <flexbox-item>
          <div class="icon-link-wrap">
            <div class="icon-img">
              <img src="/static/images/home_fenxiangbao.png">
            </div>
          </div>
        </flexbox-item>
        <flexbox-item><div>2</div></flexbox-item>
        <flexbox-item><div>3</div></flexbox-item>
        <flexbox-item><div>4</div></flexbox-item>
      </flexbox>
    </group>
  </div>
</template>

<style lang="stylus" scoped>
  @import "../../assets/style/variables.styl"
  .icon-link
    .icon-link-wrap
      padding .13rem .2rem
    .icon-img
      width 100%
      &>img
        width 100%
</style>
