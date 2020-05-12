<template>
  <div class="find">
    <header class="header">
      <van-search
        v-model="searchText"
        placeholder="请输入搜索关键词"
        input-align="center"
      />
      <van-tabs v-model="currentTab">
        <van-tab
          v-for="tab in tabs"
          :title="tab.title"
          :key="tab.title"
        >
        </van-tab>
      </van-tabs>
      <component :is="currentCmpt"></component>
    </header>
  </div>
</template>

<script>
import { goBook, goFind } from '@/biz/path'
import FindHome from './FindHome'
import FindUniverse from './FindUniverse'
import FindAuthor from './FindAuthor'
export default {
  name: 'Find',
  components: { FindHome, FindUniverse, FindAuthor },
  data () {
    return {
      tabs: [
        { title: '大说', componentName: 'FindHome' },
        { title: '宇宙', componentName: 'FindUniverse' },
        { title: '作者', componentName: 'FindAuthor' }
      ],
      currentTab: 0,
      searchText: ''
    }
  },
  computed: {
    currentCmpt () {
      return this.tabs[this.currentTab].componentName
    }
  },
  methods: {
    evtFind () {
      goFind()
    },
    evtGoBook (book) {
      goBook(book.id)
    }
  }
}
</script>

<style scoped>
.find {
  width: 100vw;
  height: 100vh;
  font-size: 28px;
}
</style>
