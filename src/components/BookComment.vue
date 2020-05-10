<template>
  <section class="book-comment">
    <div class="title">书友评论</div>
    <div
      v-if="items"
      class="content"
    ></div>
    <div
      v-if="!items"
      class="none flex-column"
    >
      <img
        class="none-img"
        src="../assets/none-comment.png"
      >
      <span class="none-text">暂无评论</span>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BookComment',
  components: {},
  props: ['items'],
  data () {
    return {}
  }
}
</script>

<style scoped>
.book-comment {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: flex-start;
  padding: 36px 0;
}

.title {
  margin-left: 36px;
  align-self: flex-start;
  color: #333333;
  font-weight: bold;
  font-size: 36px;
  letter-spacing: 0px;
  text-align: left;
}

.none {
  width: 100%;
  color: #999999;
  font-weight: bold;
  font-size: 40px;
  text-align: center;
}

.none-img {
  margin-top: 48px;
}

.none-text {
  margin-top: 32px;
}
</style>
