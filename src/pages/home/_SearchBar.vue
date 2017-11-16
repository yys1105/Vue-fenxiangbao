<script>
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
      }
    }
  }
</script>

<template>
  <div class="search-bar-wrap">
    <div class="search-container">
      <div class="default-text" v-if="!searching" @click="searching = true">
        <i class="iconfont icon-sousuo"></i>&nbsp;搜索
      </div>
      <div class="input-wrap" v-if="searching">
        <input type="text" class="input" ref="input" v-model="value" autofocus @keyup.13="search">
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
        padding .03rem .45rem .03rem .15rem
        position relative
        .cancel-text
          position absolute
          top .03rem
          right .15rem
          font-size .14rem
          color $sky-blue
        input
          border-style none
          outline none
          width 100%
          height 100%
</style>
