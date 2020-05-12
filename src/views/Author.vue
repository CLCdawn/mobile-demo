<template>
  <div class="author">
    <van-nav-bar
      class="nav-bar"
      left-text="返回"
      left-arrow
      :fixed="true"
      :placeholder="true"
      title="作者详情页"
      @click-left="evtBack"
    ></van-nav-bar>

  </div>
</template>

<script>
import { goBack } from '@/biz/path'
export default {
  name: 'Author',
  components: {},
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      refreshing: false
    }
  },
  methods: {
    evtBack () {
      goBack()
    }
  }
}
</script>

<style scoped>
.author {
  width: 100vw;
  height: 100vh;
  overflow: auto;
}

</style>
