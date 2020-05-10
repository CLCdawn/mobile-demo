<template>
  <div class="book">
    <van-nav-bar
      class="nav-bar"
      left-text="返回"
      left-arrow
      :fixed="true"
      :placeholder="true"
      @click-left="evtBack"
    ></van-nav-bar>
    <BookIntro class="section"></BookIntro>
    <BookBrief class="section"></BookBrief>
    <BookRatePannel class="section"></BookRatePannel>
    <BookCatalog
      class="section catalog"
      current="1000"
      status="连载中"
      @click.native="evtCatalog"
    ></BookCatalog>
    <BookComment class="section"></BookComment>
    <BookFooter></BookFooter>
  </div>
</template>

<script>
import BookIntro from '@/views/book/BookIntro'
import BookBrief from '@/views/book/BookBrief'
import BookRatePannel from '@/views/book/BookRatePannel'
import BookCatalog from '@/views/book/BookCatalog'
import BookComment from '@/views/book/BookComment'
import BookFooter from '@/views/book/BookFooter'
import { goBack, goCatalog } from '@/biz/path'
export default {
  name: 'Book',
  components: {
    BookBrief,
    BookIntro,
    BookRatePannel,
    BookCatalog,
    BookComment,
    BookFooter
  },
  created () {
    console.log(this.$router, this.$route)
  },
  data () {
    return { rate: 7.5, rateNum: 109 }
  },
  computed: {
    rateIcon () {
      return (this.rate * 5) / 10
    }
  },
  methods: {
    evtBack () {
      goBack()
    },
    evtCatalog () {
      goCatalog()
    }
  }
}
</script>

<style scoped>
.book {
  width: 100vw;
  height: 100vh;
  background: #f5f6fa;
  overflow: auto;
}

.section {
  background: #ffffff;
}

.catalog {
  margin: 20px 0;
}
</style>
