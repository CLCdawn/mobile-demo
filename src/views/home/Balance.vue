<template>
  <div class="balance">
    <van-nav-bar
      class="nav-bar"
      left-arrow
      :fixed="true"
      :placeholder="true"
      @click-left="evtBack"
    ></van-nav-bar>
    <div class="balance-info">
      <img src="../../assets/balance.png" width="64px" alt="">
      <p>我的点数</p>
      <p class="balance-digit">{{balance}}</p>
      <van-button round type="info">充&nbsp;值</van-button>
    </div>
  </div>
</template>

<script>
import { goBack } from '@/biz/path'
export default {
  data () {
    return {
      balance: 4321
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
.balance{
 width: 100vw;
 text-align: center;
 color: #333333;
 font-size: 36px;
}
.balance .balance-info{
  margin-top: 10vh;
}
.balance-digit {
  font-size: 64px;
  margin-top: 0;
}
.balance .van-button--normal{
  width: 70vw;
  background: linear-gradient(90deg, #55BAF9 0%, #0095FF 100%);
  border: none;
}
</style>
