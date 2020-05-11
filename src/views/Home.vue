<template>
  <div class="home flex-column">
    <router-view></router-view>
    <HomeFooterTabBar></HomeFooterTabBar>
  </div>
</template>

<script>
import HomeFooterTabBar from '@/components/HomeFooterTabBar'
export default {
  name: 'Home',
  components: { HomeFooterTabBar },
  data () {
    return {}
  },
  mounted () {
    this.$api.get('api/main/pub/rank/collect/top', response => {
      if (response.status >= 200 && response.status < 300) {
        console.log(response.data)
      } else {
        console.log(response.message)
      }
    })
  }
}
</script>

<style scoped>
.home {
  width: 100vw;
  height: 100vh;
}
</style>
