<template>
  <div class="find">
    <header class="header">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        input-align="center"
      />
      <van-tabs v-model="tabActive">
        <van-tab title="大说"></van-tab>
        <van-tab title="宇宙"></van-tab>
        <van-tab title="作者"></van-tab>
      </van-tabs>
    </header>
    <van-grid :column-num="2">
      <van-grid-item
        v-for="(item,index) in categoryList"
        :key="index"
        icon="photo-o"
        :text="item.name"
      />
    </van-grid>
  </div>
</template>

<script>
export default {
  name: 'Find',
  components: {},
  data () {
    return {
      value: '',
      tabActive: 0,
      categoryList: [
        {
          name: '科技宇宙'
        },
        {
          name: '科技宇宙'
        },
        {
          name: '科技宇宙'
        },
        {
          name: '科技宇宙'
        },
        {
          name: '科技宇宙'
        },
        {
          name: '科技宇宙'
        },
        {
          name: '科技宇宙'
        },
        {
          name: '科技宇宙'
        },
        {
          name: '科技宇宙'
        }
      ]
    }
  }
}
</script>

<style scoped>
.find {
  width: 100vw;
  height: 100vh;
}
</style>
