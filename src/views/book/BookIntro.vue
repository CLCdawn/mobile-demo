<template>
  <section class="book-media">
    <img class="media-figure">
    <div class="media-body">
      <div class="book-tag">
        <van-tag
          round
          type="primary"
        >都市</van-tag>
        <van-tag
          round
          type="success"
        >修仙宇宙</van-tag>
      </div>
      <div class="book-title">修仙小说XXXXXX</div>
      <div class="book-author">为爱发电</div>
      <div class="book-Rating">
        <span class="rate-value">{{rate}}</span>
        <van-rate
          v-model="rateIcon"
          allow-half
          void-icon="star"
          void-color="#eee"
          :readonly="true"
        />
        <span class="rate-num">{{rateNum}}人评分</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BookIntro',
  components: {},
  props: ['rate', 'rateNum'],
  data () {
    return {}
  },
  computed: {
    rateIcon () {
      return (this.rate * 5) / 10
    }
  }
}
</script>

<style scoped>
.book-media {
  display: flex;
  padding: 48px;
}

.media-figure {
  width: 176px;
  height: 240px;
  box-shadow: 0px 4px 12px rgba(51, 51, 51, 0.24);
  background: orange;
}

.media-body {
  margin-left: 40px;
}

.book-tag {
  margin-top: 8px;
}

.book-tag :not(:first-child) {
  margin-left: 16px;
}

.book-title {
  margin-top: 7px;
  font-size: 40px;
  font-weight: bold;
}

.book-author {
  margin-top: 12px;
  color: #0196ff;
  font-weight: bold;
  font-size: 28px;
  text-align: left;
}

.book-Rating {
  margin-top: 15px;
  display: flex;
  align-items: center;
}

.rate-value {
  margin-right: 4px;
  color: #333333;
  font-size: 36px;
  letter-spacing: 0px;
  text-align: left;
}

.rate-num {
  margin-left: 12px;
  color: #999999;
  font-size: 24px;
  letter-spacing: 0px;
  text-align: left;
}
</style>
