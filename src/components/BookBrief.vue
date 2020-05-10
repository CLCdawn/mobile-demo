<template>
  <section
    :class="[!showMore?'book-brief book-brief-nomore':'book-brief']"
    ref="wrap"
  >
    <div
      class="book-content"
      ref="content"
    >{{content}}</div>
    <div
      class="more-tip flex"
      v-if="showMoreTip"
      @click="evtMore"
    >
      <van-icon name="arrow-down" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'BookBrief',
  components: {},
  data () {
    return {
      showMore: false,
      showMoreTip: false,
      content:
        '晚上我带你去开心开心陈默如是说。这这句类似于恩典的许诺几乎吓得我屁滚尿流。    我和陈默重逢的时候不太吉利。当天是陈默老大出殡的日子，整个夜总会却布不太吉利。当天是陈默老大出殡的日子，整个夜总会却布不太吉利。当天是陈默老大出殡的日子，整个夜总会却布不太吉利。当天是陈默老大出殡的日子，整个夜总会却布'
    }
  },
  mounted () {
    const wrapHeight = this.$refs.wrap.getBoundingClientRect().height
    const contentHeight = this.$refs.content.getBoundingClientRect().height
    if (contentHeight > wrapHeight) {
      this.showMoreTip = true
    }
  },
  methods: {
    evtMore () {
      this.showMoreTip = false
      this.showMore = true
    }
  }
}
</script>

<style scoped>
.book-brief {
  position: relative;
  overflow: hidden;
}

.book-brief-nomore {
  height: 260px;
}

.book-content {
  margin: 48px 48px 0 48px;
}

.more-tip {
  width: 80px;
  position: absolute;
  right: 48px;
  bottom: 0;
  background: #ffffff;
}
</style>
