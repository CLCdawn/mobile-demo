<template>

  <van-tabbar
    :fixed="true"
    :placeholder="true"
    active-color="#7d7e80"
  >
    <van-tabbar-item
      icon="star-o"
      @click="evtAddBookcase"
    >加入书架</van-tabbar-item>
    <van-tabbar-item
      icon="like-o"
      @click="evtAddFavor"
    >收藏</van-tabbar-item>
    <van-tabbar-item class="read-pannel" @click="evtRead">
      <span>开始阅读</span>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: 'BookFooter',
  data () {
    return {
    }
  },
  components: {},
  methods: {
    evtAddBookcase () {
      this.$emit('evtAddBookcase')
    },
    evtAddFavor () {
      this.$emit('evtAddFavor')
    },
    evtRead () {
      this.$emit('evtRead')
    }
  }
}
</script>

<style scoped>
.read-pannel {
  flex: none;
  width: 454px;
}

.read-pannel,
van-tabbar-item__text {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 4px;
  background: linear-gradient(90deg, #55baf9 0%, #0095ff 100%);
  border-radius: 222px;
  font-size: 18px;
  color: #ffffff;
}
</style>
