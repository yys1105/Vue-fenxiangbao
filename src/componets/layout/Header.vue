<script>
  import { XHeader } from 'vux'
  export default {
    name: 'header',
    components:{
      XHeader
    },
    data() {
      return {
        isBgBlue:this.$route.meta.isBlue?true:false,
        noBack:this.$route.meta.noBack?true:false,
        title:this.$route.meta.title
      }
    },
    methods:{
      back(){
        this.$router ? this.$router.back() : window.history.back()
      }
    },
    watch:{
      title:function (val) {
        this.title = val
        return val
      }
    }
  }
</script>

<template>
  <div class="fix-header">
    <x-header :class="{'bg-default':!$route.meta.isBlue?true:false,'bg-blue':$route.meta.isBlue?true:false}">
      <div class="back-icon" slot="overwrite-left" @click="back">
        <span class="left-arrow" v-if="!$route.meta.noBack?true:false"></span>
      </div>
      <div class="title-text" v-html="$route.meta.title"></div>
    </x-header>
  </div>
</template>


<style scoped lang="stylus">
@import "../../assets/style/variables.styl"
  .fix-header
    position absolute
    top 0
    left 0
    z-index 99
    width 100%
  .bg-default
    background-color #fff
    border-bottom 1px solid #cccccc
  .bg-blue
    background-color $sky-blue
    .back-icon
      .left-arrow::before
        content: "";
        position: absolute;
        width: 12px;
        height: 12px;
        border: 1px solid #fff;
        border-width: 1px 0 0 1px;
        -webkit-transform: rotate(315deg);
        transform: rotate(315deg);
        top: 8px;
        left: 7px;
    .title-text
      color #fff
</style>
