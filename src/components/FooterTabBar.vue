<template>

  <van-tabbar
    :fixed="true"
    :placeholder="true"
    :route="true"
    v-model="active"
  >
    <van-tabbar-item
      icon="home-o"
      :to="{name:'Bookcase'}"
    >书架</van-tabbar-item>
    <van-tabbar-item
      icon="search"
      :to="{name:'Boutique'}"
    >精选</van-tabbar-item>
    <van-tabbar-item>
      <div>为爱</div>
      <div>发电</div>
    </van-tabbar-item>
    <van-tabbar-item
      icon="friends-o"
      :to="{name:'Find'}"
    >发现</van-tabbar-item>
    <van-tabbar-item
      icon="setting-o"
      :to="{name:'Mine'}"
    >我</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: 'FooterTabBar',
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
