<script>
//  import {Search} from 'vux'
  export default {
    name: 'searchBar',
    data() {
      return {
        searching:false,
        value:''
      }
    },
    methods:{
      search(){
        this.$emit('search', this.value)
      },
      cancel(){
        this.searching = false
        this.value = ''
      },
      clickSearch(){
        this.searching = true
        this.$nextTick(() => {
          this.$refs.input.focus()
        })
      }
    }
  }
</script>

<template>
  <div class="search-bar-wrap">
    <div class="search-container" :class="{'dark-bg':searching}">
      <div class="default-text" v-show="!searching" @click="clickSearch">
        <i class="iconfont icon-sousuo"></i>&nbsp;搜索
      </div>
      <div class="input-wrap" v-show="searching">
        <input type="text" class="input" ref="input" v-model="value" @keyup.13="search">
        <span class="cancel-text" @click="cancel">取消</span>
      </div>
    </div>
  </div>
</template>


<style scoped lang="stylus">
  @import "../../assets/style/variables.styl"
  .search-bar-wrap
    padding .083rem .46rem
    background-color $sky-blue
    .search-container
      height .27rem
      background-color #fff
      border-radius .135rem
      .default-text
        line-height .27rem
        text-align center
        color $sky-blue
        font-size .14rem
      .input-wrap
        padding 0 .45rem 0 .15rem
        height .27rem
        position relative
        .cancel-text
          position absolute
          top .03rem
          right .15rem
          font-size .14rem
          color $sky-blue
        input
          padding 4px 0
          width 100%
          height 1.42857143em
          border 0
          font-size 14px
          line-height 1.42857143em
          box-sizing content-box
          background transparent
          outline none
  .dark-bg
    background-color #f0f0f0 !important
</style>
