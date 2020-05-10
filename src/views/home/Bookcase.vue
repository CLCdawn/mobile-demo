<template>
  <div class="bookcase">
    <van-nav-bar
      class="nav-bar"
      left-text="书架"
      :fixed="true"
      :placeholder="true"
      @click-right="evtFind"
    >
      <template #right>
        <van-icon
          name="search"
          size="18"
        />
      </template>
    </van-nav-bar>

    <van-grid :column-num="3">
      <van-grid-item
        v-for="book in books"
        :key="book.id"
        @click="evtGoBook(book)"
      >
        <div class="book">
          <img
            class="book-img"
            src="../../assets/logo.png"
          >
          <div class="book-title van-multi-ellipsis--l2">{{book.title}}</div>
          <div class="book-chapter">{{chapterView(book.chapter)}}</div>
        </div>
      </van-grid-item>
    </van-grid>

  </div>
</template>

<script>
import { goFind, goBook } from '../../biz/path'
export default {
  name: 'Bookcase',
  components: {},
  data () {
    return {
      books: [
        { id: '1', img: '', title: 'xxxx', chapter: '123' },
        {
          id: '2',
          img: '',
          title: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
          chapter: '123'
        },
        { id: '3', img: '', title: 'xxxx', chapter: '123' },
        { id: '4', img: '', title: 'xxxx', chapter: '123' },
        {
          id: '5',
          img: '',
          title: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
          chapter: '123'
        },
        { id: '6', img: '', title: 'xxxx', chapter: '123' }
      ]
    }
  },
  methods: {
    chapterView (chapter) {
      if (!isNaN(Number(chapter))) {
        return `读到${chapter}章`
      } else {
        return '未读'
      }
    },
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
.bookcase {
  width: 100%;
  height: 100%;
}

.book {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.book-img {
  width: 176px;
  height: 240px;
}

.book-title {
  width: 176px;
  margin-top: 24px;
  color: #333333;
  font-weight: 500;
  font-size: 28px;
  line-height: 28px;
  letter-spacing: 0px;
  text-align: left;
  overflow-wrap: anywhere;
}

.book-chapter {
  width: 176px;
  margin-top: 12px;
  color: #999999;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
}
</style>
