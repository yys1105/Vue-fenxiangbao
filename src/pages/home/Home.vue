<script>
  import SearchBar from './_SearchBar.vue'
  import Swiper from './_Swiper.vue'
  import Goods from './_Goods.vue'
  import {Group, Flexbox, FlexboxItem, Sticky} from 'vux'
  import MeScroll from 'mescroll.js'

  export default {
    name: 'home',
    components: {
      SearchBar,
      Swiper,
      Goods,
      Group,
      Flexbox,
      FlexboxItem,
      Sticky
    },
    data() {
      return {
        goodsBoxHeight: 0,
        linkList: [{
          imgSrc: '/static/images/home_fenxiangbao.png',
          text: '分享宝',
          linkToName: 'Home'
        }, {
          imgSrc: '/static/images/home_baoleba.png',
          text: '报了吧',
          linkToName: 'Home'
        }, {
          imgSrc: '/static/images/home_changlegou.png',
          text: '厂乐购',
          linkToName: 'Home'
        }, {
          imgSrc: '/static/images/home_register.png',
          text: '注册',
          linkToName: 'Home'
        }],
        goodsList: [],
        totalPage: 0
      }
    },
    methods: {
      search(val) {
        console.log(val)
      },
      getListDataFromNet(pageNum, pageSize, successCallback, errorCallback) {
        this.$httpPost("/api/getGoodsList", {
          pageCurrent: pageNum,
          pageSize: pageSize
        }).then((data) => {
          var listData = data.data.list;
          this.totalPage = data.data.pageCount
          successCallback && successCallback(listData);//成功回调
        }).catch(err => {
          this.$vux.toast.text(err.message, 'middle')
          errorCallback && errorCallback()
        });
      },
      upCallback: function (page) {
        var self = this;
        self.getListDataFromNet(page.num, page.size, function (curPageData) {
//          curPageData=[]
          if (page.num == 1) self.dataList = [];
          self.goodsList = self.goodsList.concat(curPageData);
          self.mescroll.endByPage(curPageData.length, self.totalPage); //必传参数(当前页的数据个数, 总页数)
        }, function () {
          self.mescroll.endErr();
        });
      }
    },
    created() {
      this.goodsBoxHeight = document.body.clientHeight - 46 - 53 - 93
    },
    mounted: function () {
      var self = this;
      self.mescroll = new MeScroll("mescroll", {
        down: {
          offset: 50,
          minAngle: 80
        },
        up: {
          callback: self.upCallback,
          toTop: {
            src: "/static/images/mescroll-totop.png",
          },
          empty: {
            warpId: "mescroll",
            icon: "",
            tip: "亲,暂无相关数据哦~",
          },
        }
      });
    }
  }
</script>

<template>
  <div id="vux_view_box_body">
    <sticky scroll-box="vux_view_box_body" :offset="0" style="z-index: 999">
      <search-bar @search="search"></search-bar>
    </sticky>
    <div>
      <swiper></swiper>
    </div>

    <sticky scroll-box="vux_view_box_body" :offset="46">
      <flexbox :gutter="0" class="icon-link">
        <template v-for="item in linkList">
          <flexbox-item>
            <div class="icon-link-wrap" @click="$router.push({name:item.linkToName})">
              <div class="icon-img">
                <img :src="item.imgSrc">
              </div>
              <div class="link-text">
                {{ item.text }}
              </div>
            </div>
          </flexbox-item>
        </template>
      </flexbox>
    </sticky>


      <div :style="{'height':goodsBoxHeight+'px'}" style="overflow: hidden">

        <div id="mescroll" class="mescroll">
          <flexbox :gutter="0" class="goods-wrap" wrap="wrap">
            <template v-for="item in goodsList">
              <flexbox-item :span="1/2">
                <goods :data="item"></goods>
              </flexbox-item>
            </template>
          </flexbox>
        </div>


      </div>
  </div>
</template>

<style lang="stylus" scoped>
  @import "../../assets/style/variables.styl"
  @import '/static/style/mescroll.min.css'
  .icon-link
    background-color #fff
    margin-top 10px
    .icon-link-wrap
      padding .1rem .23rem
    .icon-img
      width 100%
      & > img
        width 100%
    .link-text
      text-align center
      font-size .1rem
      color $lightDark

  .goods-wrap
    margin-top 3px
</style>
