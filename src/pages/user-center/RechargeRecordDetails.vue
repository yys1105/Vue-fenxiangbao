<script>
  import RecordCard from './_RecordCard.vue'
  export default {
    name: 'rechargeRecordDetails',
    components:{
      RecordCard
    },
    data() {
      return {}
    }
  }
</script>

<template>
  <div>
    <div class="record-wrap">
      <record-card></record-card>
    </div>
  </div>
</template>


<style scoped lang="stylus">
  .record-wrap
    margin .2rem
</style>
