<script>
  import {Cell} from 'vux'

  export default {
    name: 'meCell',
    components:{
      Cell
    },
    props:{
      title:{
        type:String
      },
      isLink:{
        type:Boolean,
        default:false
      },
      link:{
        type:String
      },
      inlineDesc:{
        type:String
      }
    },
    data() {
      return {}
    }
  }
</script>

<template>
  <cell :is-link="isLink" :link="link">
    <div slot="icon" :class="{icon:$slots.icon}">
      <slot name="icon"></slot>
    </div>
    <div slot="title" class="title">
      <div v-if="title">{{ title }}</div>
      <slot name="title"></slot>
    </div>
    <div slot="inline-desc" class="inline-desc">
      {{ inlineDesc }}
    </div>
    <div class="value-text">
      <slot></slot>
    </div>
  </cell>
</template>


<style scoped lang="stylus">
  @import "../../assets/style/variables.styl"
  .icon
    padding-right .12rem
  .title
    font-size .14rem
    color $dark
  .inline-desc
    font-size .1rem
    line-height .2rem
    color $lightAsh
  .value-text
    color $lightAsh
    font-size .14rem
</style>
