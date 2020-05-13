<template>
  <div class="setting">
    <van-nav-bar
      class="nav-bar"
      title="设置"
      left-arrow
      :fixed="true"
      :placeholder="true"
      @click-left="evtBack"
    ></van-nav-bar>
    <van-cell title="用户头像">
      <template #default>
        <img height="100%" :src=avatarUrl alt="">
        <van-icon name="play" />
      </template>
    </van-cell>
    <van-cell title="用户昵称">
      <template #default>
        <span>{{nickname}}</span>
        <van-icon name="play" />
      </template>
    </van-cell>
    <van-cell title="联系QQ">
      <template #default>
        <span>{{QQ}}</span>
        <van-icon name="play" />
      </template>
    </van-cell>
    <van-divider />
    <van-cell title="手机绑定">
      <template #default>
        <span>{{bindPhone}}</span>
        <van-icon name="play" />
      </template>
    </van-cell>
    <van-cell title="登录密码">
      <template #default>
        <span>{{password}}</span>
        <van-icon name="play" />
      </template>
    </van-cell>
    <van-divider />
    <van-cell title="关于大说网">
      <template #default>
        <van-icon name="play" />
      </template>
    </van-cell>
    <van-cell>
      <template #title>
        <span style="color: #F95454;">退出登录</span>
      </template>
    </van-cell>
  </div>
</template>

<script>
import { goBack } from '@/biz/path'
export default {
  data () {
    return {
      avatarUrl: 'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1305353222,2352820043&fm=26&gp=0.jpg',
      nickname: 'helloword',
      QQ: '未设置',
      bindPhone: '已绑定',
      password: '已设置'
    }
  },
  components: {

  },
  methods: {
    evtBack () {
      goBack()
    }
  }
}
</script>

<style scoped>
.setting{
  width: 100vw;
  height: 100vh;
}
.setting .van-cell {
  height: 50px;
  line-height: 30px;
  cursor: pointer;
}
.setting .van-cell i{
  line-height: 30px;
  vertical-align: top;
  margin-left: 6px;
}
.setting .van-cell::after{
  border-bottom: 0;
}
.setting .van-cell__title {
  color: #333333;
}
</style>
