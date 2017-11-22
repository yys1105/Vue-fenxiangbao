<script>
  export default {
    name: 'meCellCard',
    data() {
      return {}
    }
  }
</script>

<template>
  <div class="me-cell-card-wrap">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class=card-body>
      <slot></slot>
    </div>
  </div>
</template>


<style scoped lang="stylus">
  .me-cell-card-wrap
    background-color #fff
    .header
      border-bottom 1px solid #D9D9D9
    .card-body
      padding 10px 15px
</style>
