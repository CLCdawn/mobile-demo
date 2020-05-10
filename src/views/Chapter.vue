<template>
  <div class="chapter">
    <van-nav-bar
      class="nav-bar"
      left-text="返回"
      left-arrow
      :fixed="true"
      :placeholder="true"
      @click-left="evtBack"
    ></van-nav-bar>
    <h1>章节详情</h1>
  </div>
</template>

<script>
import { goBack } from '@/biz/path'
export default {
  name: 'Chapter',
  components: {},
  data () {
    return {
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
.catalog {
  width: 100vw;
  height: 100vh;
  overflow: auto;
}

</style>
