<template>
  <div class="chapter">
    <van-nav-bar
      class="nav-bar"
      left-text="返回"
      left-arrow
      :fixed="true"
      :placeholder="true"
      @click-left="evtBack"
    ></van-nav-bar>
    <div class="book-context" @click="showPopup">
      <van-popup
        v-model="popupBottom"
        position="bottom"
        :close-on-click-overlay="false"
        :style="{ height: '64px' }"
      >
        <van-row class="setting-menu" @click.stop>
          <van-col span="6" @click.stop="popupBottom=false; popupLeft=true;">
            <div>
              <span class="iconfont icon-mulu"></span>
            </div>
            <div>目录</div>
          </van-col>

          <van-col span="6">
            <div>
              <span class="iconfont icon-shezhi"></span>
            </div>
            <div>设置</div>
          </van-col>

          <van-col span="6">
            <div>
              <span class="iconfont icon-yejian3x"></span>
            </div>
            <div>夜间</div>
          </van-col>

          <van-col span="6">
            <div>
              <span class="iconfont icon-gengduo"></span>
            </div>
            <div>更多</div>
          </van-col>
        </van-row>
      </van-popup>

      <van-popup
        v-model="popupLeft"
        position="left"
        :close-on-click-overlay="false"
        :style="{ width: '80%',height:'100%' }"
      >
        <div class="book-menu" @click.stop>
          <div class="book-info">
            <div style="height:80px;float:left;margin-right: 16px;">
              <img
                style="width:60px;height:80px;"
                src
                alt
                onerror="this.src='https://t9.baidu.com/it/u=4169540006,4220376401&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1589790157&t=85d1fb5beeb27378d5f4972d7799b3ce'"
              />
            </div>
            <div>
              <div style="padding-top: 10px;float:left;">
                <span
                  style="font-weight: 500;font-size:20px;line-height: 20px;display:block;padding-bottom:5px;color: #333333;letter-spacing: -0.3px"
                >书籍名称</span>
                <span style=" font-size: 14px;color:#666666">作者名称</span>
              </div>
            </div>

            <van-row style="font-size:14px;padding-top:22px;clear:both;">
              <van-col span="12">共342章</van-col>
              <!-- <van-col span="12">倒序</van-col> -->
            </van-row>
          </div>
          <div
            style="width:100%;height:28px;background-color:#EEE;font-size: 12px;line-height: 28px;padding-left:4px;margin-bottom: 10px;margin-top: 10px;color: #999999"
          >正文</div>
          <div class="book-chapters">
            <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
              <van-cell v-for="item in 100" :key="item" :title="item" />
            </van-list>
          </div>
        </div>
      </van-popup>
    </div>
  </div>
</template>
<style scoped>
.catalog {
  width: 100vw;
  height: 100vh;
  overflow: auto;
}
.book-context {
  min-height: calc(100vh - 100px);
  width: 100vw;
  /* background-color: #666; */
}
.setting-menu,
.setting-menu .van-col {
  height: 100%;
  text-align: center;
  font-size: 4vw;
}
.setting-menu {
  padding-top: 20px;
}
.setting-menu .iconfont {
  font-size: 6vw;
}

.book-menu {
  height: 100%;
  width: 100%;
  padding: 30px 20px 20px 20px;
}
</style>

<script>
import { goBack } from '@/biz/path'
export default {
  name: 'Chapter',
  components: {},
  data () {
    return {
      popupBottom: false,
      popupLeft: false
    }
  },
  methods: {
    evtBack () {
      goBack()
    },
    showPopup () {
      console.log(this.popupBottom)

      if (this.popupLeft && this.popupBottom === false) {
        this.popupLeft = false
        return
      }

      if (this.popupLeft) return
      this.popupBottom = !this.popupBottom
    }
  }
}
</script>
