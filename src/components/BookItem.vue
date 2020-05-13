<template>
  <div class="book-item">
    <img
      class="book-img"
      :src="book.img"
    >
    <div class="book-body">
      <div class="book-header">
        <van-tag
          round
          type="primary"
          v-for="tag in book.tags"
          :key="tag"
        >{{tag}}</van-tag>
        <div class="book-name">{{book.name}}</div>
      </div>
      <div class="book-author">
        <div>{{book.author}}</div>
        <div>{{book.category}}</div>
      </div>
      <div class="book-brief">
        {{book.brief}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookItem',
  props: ['book'],
  data () {
    return {}
  },
  components: {}
}
</script>

<style scoped>
.book-item {
  margin: 28px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 200px;
}
.book-img {
  margin: 30px;
  width: 148px;
  height: 200px;
}

.book-body {
  height: 100%;
}

.book-header {
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
}

.book-name {
  margin-left: 8px;
  font-weight: 500;
  font-size: 32px;
  color: #333333;
}

.book-author {
  margin: 10px 0 12px 0;
  font-size: 24px;
  display: flex;
  align-items: center;
  color: #333333;
}

.book-brief {
  position: relative;
  width: 512px;
  height: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 24px;
  color: #666666;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
