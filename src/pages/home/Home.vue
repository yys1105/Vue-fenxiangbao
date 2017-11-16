<script>
export default {
  components: {
  },
  data () {
      return {

      }
  },
  methods: {
    login(){
      this.$httpPost('/api/login',{

      }).then((data)=>{
        console.log(data)
        this.$vux.toast.text(data.message,'middle')
      }).catch(err=>{
        this.$vux.toast.text(err.message,'middle')
      })
    }
  },
  created () {
    this.login()
  }
}
</script>

<template>
    <div class="link">new</div>
</template>

<style lang="stylus" scoped>
  @import "../../assets/style/variables.styl"
  .link
    color $link
</style>
