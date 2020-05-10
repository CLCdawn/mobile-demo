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
  }
}
</script>

<style scoped>
.home {
  width: 100vw;
  height: 100vh;
}
</style>
