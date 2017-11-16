<script>
  import {ViewBox} from 'vux'
  import AppHeader from './Header.vue'
  import AppNav from './Nav.vue'

  export default {
    name: 'layout',
    components: {
      ViewBox,
      AppHeader,
      AppNav
    },
    data() {
      return {
      }
    },
    computed:{
      isHideHeader(){
        return this.$route.name=='Home'
      },
      isShowNav(){
        return this.$route.name=='Home'
      },
      bodyPaddingTop(){
        return this.isHideHeader?'0px':'46px'
      },
      bodyPaddingBottom(){
        return this.isShowNav?'55px':'0px'
      }
    }
  }
</script>

<template>
  <div style="height:100%;">
    <view-box ref="viewBox" :body-padding-top="bodyPaddingTop" :body-padding-bottom="bodyPaddingBottom">
      <app-header slot="header" v-if="!isHideHeader"></app-header>
      <router-view></router-view>
      <app-nav slot="bottom" v-if="isShowNav"></app-nav>
    </view-box>
  </div>
</template>


<style scoped>

</style>
