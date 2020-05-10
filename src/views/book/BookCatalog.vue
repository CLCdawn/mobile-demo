<template>
  <section class="book-catalog">
    <span class="title">目录</span>
    <span class="chapter">当前{{current}}章</span>
    <span class="status">{{status}}</span>
    <van-icon
      class="icon"
      name="play"
    />
  </section>
</template>

<script>
export default {
  name: 'BookCatalog',
  components: {},
  props: ['current', 'status'],
  data () {
    return {}
  }
}
</script>

<style scoped>
.book-catalog {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
}

.title {
  margin-left: 36px;
  margin-right: 40px;
  color: #333333;
  font-weight: bold;
  font-size: 36px;
  letter-spacing: 0px;
  text-align: left;
}

.chapter {
  flex: 1;
  color: #333333;
  font-weight: 500;
  font-size: 32px;
  letter-spacing: 0px;
  text-align: left;
}

.status {
  color: #db5051;
  font-weight: bold;
  font-size: 32px;
  letter-spacing: 0px;
  text-align: left;
}

.icon {
  margin-right: 36px;
  color: #db5051;
}
</style>
