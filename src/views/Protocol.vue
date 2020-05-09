<template>
  <div class="flex-column">
    <van-nav-bar
      class="nav-bar"
      left-text="返回"
      left-arrow
      :fixed="true"
      :placeholder="false"
      @click-left="evtBack"
    />
    <h1 class="title">用户注册协议</h1>

  </div>
</template>

<script>
import { goBack } from '@/biz/path'
export default {
  name: 'Protocol',
  components: {},
  data () {
    return {
      tip: '密码长度大于6位，含字母和数字，字母区分大小写',
      username: '',
      password: '',
      rePassword: '',
      phone: '',
      checked: false
    }
  },
  methods: {
    evtBack () {
      goBack()
    }
  }
}
</script>
<style scoped>
.title {
  font-family: PingFang SC;
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  display: flex;
  align-self: flex-start;
  color: #333333;
}
</style>
