<template>
  <div class="home flex-column">
    <router-view></router-view>
    <FooterTabBar></FooterTabBar>
  </div>
</template>

<script>
import FooterTabBar from '@/components/FooterTabBar'
export default {
  name: 'Home',
  components: { FooterTabBar },
  data () {
    return {}
  }
}
</script>

<style scoped>
.home {
  width: 100vw;
  height: 100vh;
  background: red;
}
</style>
