<template>
  <section class="book-comment">
    <header class="header">
      <div class="title">书友评论</div>
      <van-button
        round
        type="default"
        class="btn-comment"
        size="small"
        @click="evtComment"
      >我要评论</van-button>
    </header>
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
        src="../../assets/none-comment.png"
      >
      <span class="none-text">暂无评论</span>
    </div>
    <van-dialog
      v-model="show"
      title="撰写评论"
      show-cancel-button
      confirmButtonText="发布"
      className="dialog-comment"
    >
      <textarea
        placeholder="输入..."
        class="comment-text"
        rows="10"
      ></textarea>
    </van-dialog>
  </section>
</template>

<script>
export default {
  name: 'BookComment',
  components: {},
  props: ['items'],
  data () {
    return { show: false }
  },
  methods: {
    evtComment () {
      this.show = true
    }
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
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title {
  margin-left: 36px;
  color: #333333;
  font-weight: bold;
  font-size: 36px;
  letter-spacing: 0px;
  text-align: left;
}

.btn-comment {
  margin-right: 32px;
  color: #999999;
}

.dialog-comment >>> .van-dialog__content {
  display: flex;
}

.comment-text {
  flex: 1;
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
