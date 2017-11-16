<template>
  <div>
    <swiper loop auto :list="imgList" v-model="currIndex" @on-index-change="change" dots-position="center"></swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from 'vux'

  const baseList = [{
    url: 'javascript:',
    img: 'https://static.vux.li/demo/1.jpg',
  }, {
    url: 'javascript:',
    img: 'https://static.vux.li/demo/2.jpg',
  }, {
    url: 'javascript:',
    img: 'https://static.vux.li/demo/5.jpg',
    fallbackImg: 'https://static.vux.li/demo/3.jpg'
  }]

  export default {
    components: {
      Swiper,
      SwiperItem
    },
    ready() {

    },
    methods: {
      change(index) {
        this.currIndex = index
      }
    },
    data() {
      return {
        imgList: baseList,
        currIndex: 0,
      }
    }
  }
</script>

<style scoped>
</style>
