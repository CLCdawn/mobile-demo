<template>
  <div class="mine">
    <div class="my-info-card">
      <div class="base-info">
        <div class="base-info-avatar">
          <img src="../../assets/avatar.png" alt="">
        </div>
        <div style="width: 63vw;">
          <p class="username">{{name}}</p>
          <p class="phonenum">{{phone}}</p>
          <div class="mengban"></div>
        </div>
        <div class="setting-icon">
          <img src="../../assets/Union.png" alt="">
        </div>
      </div>
      <div class="account-info">
        <div class="account-info-cell">
          <p class="account-info-cell-digit">{{numOfBooks}}</p>
          <p class="account-info-cell-tag">我的书籍</p>
        </div>
        <div class="account-info-cell">
          <p class="account-info-cell-digit">{{point}}</p>
          <p class="account-info-cell-tag">我的点数</p>
        </div>
        <div class="account-info-cell">
          <p class="account-info-cell-digit">{{credit}}</p>
          <p class="account-info-cell-tag">积分</p>
        </div>
      </div>
    </div>
    <div class="notify">
      <div class="notify-msg">
        <img src="../../assets/message.png" alt="">
        <div>
          <div class="notify-msg-tag">消息中心</div>
          <div class="notify-msg-content">{{numOfNewMsg}}条新消息</div>
        </div>
      </div>
      <div class="notify-activity">
        <img src="../../assets/activity.png" alt="">
        <div>
          <div class="notify-activity-tag">活动中心</div>
          <div class="notify-activity-content">{{activityContent}}</div>
        </div>
      </div>
    </div>
    <div class="cells">
      <van-cell title="我的收藏" icon="like" :value="numOfCollectBooks" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Mine',
  components: {},
  data () {
    return {
      name: '刘桂兰插队挖红薯还顺便薅羊毛',
      avatarUrl: '../../assets/avatar.png',
      phone: '13912345678',
      numOfBooks: 12,
      point: 3421,
      credit: 463,
      activityContent: '五五断更节',
      numOfNewMsg: 3,
      numOfCollectBooks: 12
    }
  }
}
</script>

<style scoped>
.mine{
  width: 100vw;
  height: 100vh;
}
.my-info-card{
  width: 90vw;
  padding: 5vw 5vw;
  height: 45vw;
  background: #f0f1f6;
}
.base-info{
  width: auto;
  display: flex;
  position: relative;
}
.base-info p{
  margin: 0;
  font-family: "PingFang SC";
}
.base-info .username{
  font-size: 36px;
  font-weight: 500;
  color: #333333;
  white-space: nowrap;
  overflow: hidden;
}
.base-info .phonenum{
  font-size: 24px;
  font-weight: 400;
  margin-top: 10px;
  color: #666666;
}
.base-info .mengban{
  position: absolute;
  height: 100%;
  width: 13vw;
  left: 69vw;
  top: 0;
  background: linear-gradient(to right, rgba(255,255,255,0), rgba(240,241,246,1));
}
.base-info-avatar img{
  width: 15.5vw;
  height: 15.5vw;
  border-radius: 50%;
  margin-right: 3vw;
}
.setting-icon{
  margin-top: 1vw;
  margin-left: 2.5vw;
}
.account-info{
  display: flex;
}
.account-info-cell{
  width: 20vw;
  margin-right: 4vw;
  margin-top: 25px;
}
.account-info-cell p{
  margin: 0;
}
.account-info-cell .account-info-cell-digit{
  font-size: 48px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  letter-spacing: 1px;
  font-weight: 500;
  color: #333333;
}
.account-info-cell .account-info-cell-tag{
  font-size: 24px;
  color: #666666;
  font-weight: 300;
}
.notify{
  display: flex;
  position: absolute;
  top: 44vw;
  left: 5vw;
  right: 5vw;
  justify-content: space-between;
}
.notify img{
  width: 12vw;
  height: 12vw;
  margin-right: 2vw;
}
.notify .notify-msg, .notify-activity{
  border-radius: 8px;
  cursor: pointer;
  padding: 4vw 0;
  padding-left: 3vw;
  width: 40vw;
  display: flex;
}
.notify .notify-msg{
  background: linear-gradient(90deg, rgba(0, 209, 255, 0.08) 0%, rgba(255, 255, 255, 0) 49.69%), #FFFFFF;
}
.notify .notify-activity{
  background: linear-gradient(90deg, rgba(255, 183, 80, 0.08) 0%, rgba(255, 255, 255, 0) 50%), #FFFFFF;
}
.notify .notify-msg-tag, .notify-activity-tag{
  color: #333333;
  font-size: 32px;
  font-weight: 500;
}
.notify .notify-msg-content, .notify-activity-content{
  color: #666666;
  margin-top: 10px;
  font-size: 24px;
}
.cells{
  width: 100vw;
  margin-top: 10vw;
}
</style>
