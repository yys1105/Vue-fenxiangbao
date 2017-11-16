<template>
  <div id="app">
    <layout></layout>
  </div>
</template>

<script>
  import Layout from './componets/layout/Layout.vue'

  export default {
    name: 'app',
    components:{
      Layout
    }
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';

  body {
    background-color: #f0f0f0;
  }
  #app{
    height: 100%;
  }
</style>
