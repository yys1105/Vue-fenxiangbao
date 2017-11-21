<script>
  import {Search} from 'vux'

  export default {
    name: 'searchBar',
    components:{
      Search
    },
    data() {
      return {
        results: [],
        value: null,
        autoFixed: false,
      }
    },
    methods:{
      resultClick (item) {
        window.alert('you click the result item: ' + JSON.stringify(item))
      },
      onSubmit (val) {
        window.alert('on submit' + val)
      },
      onFocus () {
        console.log('on focus')
      },
      onCancel () {
        console.log('on cancel')
      }
    }
  }
</script>

<template>
  <div>
    <search @on-submit="onSubmit"
            :auto-fixed="autoFixed"
            @on-focus="onFocus"
            @on-cancel="onCancel">
    </search>
  </div>
</template>


<style lang="stylus">
  @import "../../assets/style/variables.styl"
  .weui-search-bar
  .weui-search-bar__form
    background-color $sky-blue!important
  .weui-icon-search
  .weui-search-bar__label
    color $sky-blue!important
  .weui-search-bar__label
  .weui-search-bar__form:after
    border-radius 28px!important
</style>
