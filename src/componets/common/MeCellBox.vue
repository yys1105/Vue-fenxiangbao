<script>
  import {CellBox} from 'vux'

  export default {
    name: 'meCellBox',
    components:{
      CellBox
    },
    props:{
      title:{
        type:String
      }
    },
    data() {
      return {}
    }
  }
</script>

<template>
  <cell-box>
    <div class="me-cell-box-container">
      <div class="title" v-if="title">{{ title }}</div>
      <div>
        <slot></slot>
      </div>
    </div>
  </cell-box>
</template>

<style scoped lang="stylus">
  @import "../../assets/style/variables.styl"
  .me-cell-box-container
    width 100%
    .title
      font-size .14rem
      color $dark
</style>
