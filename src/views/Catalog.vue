<template>
  <div class="catalog">
    <van-nav-bar
      class="nav-bar"
      left-text="返回"
      left-arrow
      :fixed="true"
      :placeholder="true"
      title="目录"
      @click-left="evtBack"
    ></van-nav-bar>
    <van-pull-refresh
      v-model="refreshing"
      @refresh="onRefresh"
    >
      <van-list
        class="list"
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell
          v-for="item in list"
          size="large"
          :key="item.chapter"
          :title="`${item.chapter} ${item.name}`"
          :value="`${item.status}`"
        />
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { goBack } from '@/biz/path'
export default {
  name: 'Catalog',
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
    onLoad () {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = []
          this.refreshing = false
        }

        for (let i = 0; i < 10; i++) {
          this.list.push({
            chapter: this.list.length + 1,
            name: 'xxxxx',
            status: '免费'
          })
        }
        this.loading = false

        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 1000)
    },
    onRefresh () {
      // 清空列表数据
      this.finished = false
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true
      this.onLoad()
    },
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

.list {
  padding: 0 24px;
}
</style>
