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
    <h1 class="title flex">用户注册</h1>
    <span class="tip">{{tip}}</span>
    <van-form class="register-form">
      <van-field
        class="field"
        v-model="username"
        placeholder="请设置您的用户名"
      />
      <van-field
        class="field"
        v-model="password"
        type="password"
        placeholder="请设置您的登录密码"
      />
      <van-field
        class="field"
        v-model="rePassword"
        type="password"
        placeholder="请确认您的登录密码"
      />

      <van-field
        class="field"
        v-model="phone"
        placeholder="请输入您手机号"
      />
      <van-button
        round
        block
        size="large"
        type="info"
        @click="evtSumbit"
      >
        注册
      </van-button>
      <div class="protocol-pannel">
        <van-checkbox
          class="check"
          v-model="checked"
          checked-color="#21A2FF;"
        >点击注册按钮即代表已阅读并</van-checkbox><span
          class="protocol-detail"
          @click="evtProtocol"
        >《用户注册协议》</span>
      </div>

    </van-form>
  </div>
</template>

<script>
import { goBack, goProtocol } from '@/biz/path'
export default {
  name: 'Register',
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
    validatorPhone (value) {
      return /^1(3|4|5|6|7|8|9)\d{9}$/.test(value)
    },
    evtSumbit (values) {
      console.log('submit', values)
    },
    evtBack () {
      goBack()
    },
    evtProtocol () {
      goProtocol()
    }
  }
}
</script>
<style scoped>
.title {
  position: relative;
  font-family: PingFang SC;
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  align-self: flex-start;
  color: #333333;
}

.title::before {
  position: relative;
  content: " ";
  margin-right: 12px;
  width: 56px;
  height: 56px;
  background: #ededed;
  border-radius: 24px;
}

.tip {
  font-family: PingFang SC;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  display: flex;
  align-self: flex-start;
  color: #666666;
}

.register-form {
  width: 590px;
  min-height: 700px;
}

.field {
  border-radius: 999px;
  margin: 48px 0;
  background: #f5f6fa;
}

.protocol-pannel {
  margin-top: 36px;
  font-family: PingFang SC;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  display: flex;
  align-items: center;
}

.protocol-detail {
  color: #3695ff;
}

.action {
  margin: 16px 0;
  justify-content: space-around;
}
</style>
