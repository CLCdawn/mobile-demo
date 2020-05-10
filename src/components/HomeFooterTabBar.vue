<template>

  <van-tabbar
    :fixed="true"
    :placeholder="true"
    :route="true"
    v-model="active"
  >
    <van-tabbar-item
      icon="search"
      :to="{name:'Find'}"
    >发现</van-tabbar-item>
    <van-tabbar-item
      icon="bar-chart-o"
      :to="{name:'Bookcase'}"
    >书架</van-tabbar-item>
    <van-tabbar-item
      icon="manager-o"
      :to="{name:'Mine'}"
    >我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: 'HomeFooterTabBar',
  data () {
    return {
      active: 0
    }
  },
  components: {}
}
</script>

<style scoped>
</style>
