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
    <h1 class="title flex">用户登录</h1>
    <van-form class="login-form">
      <van-field class="field" v-model="username" placeholder="请设置您的用户名" />
      <van-field class="field" v-model="password" type="password" placeholder="请设置您的登录密码" />
      <van-button round block size="large" type="info" @click="evtSumbit">登录</van-button>
    </van-form>
    <footer class="footer">
      <span @click="evtForget">{{txtforget}}</span>|
      <span @click="evtGoRegister">{{txtGoRegister}}</span>
    </footer>
  </div>
</template>

<script>
import { goBack, goBookcase, goRegister } from '@/biz/path'
export default {
  name: 'Login',
  components: {},
  data () {
    return {
      username: '',
      password: '',
      txtforget: '忘记了密码',
      txtGoRegister: '暂无账号，去注册'
    }
  },
  methods: {
    evtSumbit () {
      this.$api.post(
        'api/main/pub/login',
        JSON.stringify({
          loginName: this.username,
          password: this.password,
          rememberMe: true
        }),
        res => {
          const data = res.data
          if (data.resCode === '0000') {
            goBookcase()
          } else {
            this.$toast.fail(data.resData)
          }
        }
      )
    },
    evtBack () {
      goBack()
    },
    evtForget () {
      this.$dialog
        .confirm({
          title: '忘记了密码',
          message: '请联系客服修改登录密码',
          confirmButtonText: '联系客服'
        })
        .then(() => {
          // on confirm
        })
        .catch(() => {
          // on cancel
        })
    },
    evtGoRegister () {
      goRegister()
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

.login-form {
  width: 590px;
  min-height: 700px;
}

.field {
  border-radius: 999px;
  margin: 48px 0;
  background: #f5f6fa;
}

.footer {
  position: absolute;
  left: 93px;
  right: 93px;
  bottom: 64px;
  display: flex;
  justify-content: space-around;
  font-size: 24px;
  color: #333333;
}
</style>
