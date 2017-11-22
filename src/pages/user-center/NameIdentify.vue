<script>
  import {Group} from 'vux'
  import MeCellBox from '../../componets/common/MeCellBox.vue'
  import VueCoreImageUpload from 'vue-core-image-upload'

  export default {
    name: 'nameIdentify',
    components:{
      Group,MeCellBox,VueCoreImageUpload
    },
    data() {
      return {}
    },
    methods:{
      frontImguploaded(res) {
        if (res.errcode == 0) {
          this.src = res.data.src;
        }
      }
    }
  }
</script>

<template>
  <div>
    <group :gutter="10">
      <me-cell-box title="姓名">
        <div class="cell-value-text">
          谷希成
        </div>
      </me-cell-box>
      <me-cell-box title="身份证号码">
        <div class="cell-value-text">
          320684199311054176
        </div>
      </me-cell-box>
      <me-cell-box title="身份证正面">
        <div class="cell-value-text">
          <vue-core-image-upload
            class="upload-btn"
            :crop="false"
            @imageuploaded="frontImguploaded"
            :max-file-size="5242880"
            url="" >
            <div class="id-card-wrap">
              <img width="204" height="120" src="/static/images/card_opposite.png" />
            </div>
          </vue-core-image-upload>
        </div>
      </me-cell-box>
      <me-cell-box title="身份证反面">
        <div class="cell-value-text">
          <vue-core-image-upload
          class="upload-btn"
          :crop="false"
          @imageuploaded="frontImguploaded"
          :max-file-size="5242880"
          url="" >
          <div class="id-card-wrap">
            <img width="204" height="120" src="/static/images/card_positive.png" />
          </div>
        </vue-core-image-upload>
        </div>
      </me-cell-box>
      <me-cell-box title="手持身份证照片">
        <div class="cell-value-text">
          <vue-core-image-upload
          class="upload-btn"
          :crop="false"
          @imageuploaded="frontImguploaded"
          :max-file-size="5242880"
          url="" >
          <div class="id-card-wrap">
            <img width="204" height="120" src="/static/images/card_hand.png" />
          </div>
        </vue-core-image-upload>
        </div>
      </me-cell-box>
      <me-cell-box title="审核状态">
        <div class="cell-value-text">
          审核通过
        </div>
      </me-cell-box>
      <me-cell-box title="审核结果消息">
        <div class="cell-value-text">
          OK
        </div>
      </me-cell-box>
      <me-cell-box title="认证状态">
        <div class="cell-value-text">
          已经认证
        </div>
      </me-cell-box>
      <me-cell-box title="创建时间">
        <div class="cell-value-text">
          2017-5-6 12:00:00
        </div>
      </me-cell-box>
    </group>
  </div>
</template>


<style scoped lang="stylus">
  @import "../../assets/style/variables.styl"
  .cell-value-text
    font-size .14rem
    color $sky-blue
    padding .08rem 0
  .upload-btn
    width 100%
    .id-card-wrap
      width 2.04rem
      height 1.2rem
      margin 0 auto
</style>

<style lang="stylus">
  .g-core-image-upload-form
    height 100%!important
</style>
