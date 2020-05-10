<template>
  <section class="book-rate-pannel flex">
    <van-button
      class="btn"
      icon="good-job-o"
      plain
      type="default"
    >点赞</van-button>
    <van-button
      class="btn reversal"
      plain
      icon="good-job-o"
      type="default"
    >踩踩</van-button>
  </section>
</template>

<script>
export default {
  name: 'BookRatePannel',
  components: {},
  data () {
    return {}
  },

  methods: {}
}
</script>

<style scoped>
.book-rate-pannel {
  width: 100%;
  padding: 32px 0;
}
.book-rate-pannel .btn {
  margin: 0 45px;
  width: 168px;
  border-radius: 12px;
  background: #f5f6fa;
}
.reversal .van-icon{
  transform: rotate(180deg);
}
</style>
