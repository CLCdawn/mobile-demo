<template>
  <div class="bookcase">
    <van-nav-bar
      class="nav-bar"
      left-text="返回"
      left-arrow
      :fixed="true"
      :placeholder="true"
      @click-left="evtBack"
    >
      <template v-slot:title>
        <van-tabs v-model="active">
          <van-tab title="书架"></van-tab>
          <van-tab title="关注"></van-tab>
        </van-tabs>
      </template>
    </van-nav-bar>
    <h1>书架</h1>
  </div>
</template>

<script>
import { goBack } from '../../biz/path'
export default {
  name: 'Bookcase',
  components: {},
  data () {
    return { active: 0 }
  },
  methods: {
    evtBack () {
      goBack()
    }
  }
}
</script>

<style scoped>
</style>
