
<template>
  <div class="writer">
    <div>
      <van-nav-bar
        :title=writerName
        left-text="返回"
        right-text=""
        left-arrow
        @click-left="onClickLeft"
      />
      <div class="dis-flex">
        <div class="flex1">
          <img class="writer-head-img" src="../../assets/logo.png" alt="">
        </div>
        <div class="flex4">
          <h4>作者名作者名</h4>
          <p>{{workNumber}}本</p>
        </div>
      </div>
      <div>
        <div class="content-text">{{writerDes}}</div>
      </div>

      <div>
        <van-grid clickable :column-num="1">
          <van-grid-item
            v-for="(book,index) in books" :key="index"
            icon="photo-o"
            :text="book.name"
            @click="evtUniverse"
          >
            <div>
              <div class="img-box">
                <img
                  class="book-img"
                  src="../../assets/logo.png"
                >
              </div>
              <div class="content_box">
                <h3 class="content_book_title">{{book.title}}</h3>
                <p><span>作者名</span><span>&nbsp;&nbsp;&nbsp;都市</span></p>
                <p class="content_intro">
                  contenentcontenentcontenentcontenentcontenentcontenentcontentcontenentcontenentcontenentcontenentcontenentcontenentcontent</p>
              </div>
            </div>

          </van-grid-item>
        </van-grid>
      </div>
    </div>

  </div>
</template>

<script>
import { goBack, goUniverse } from '../../biz/path'

export default {
  name: 'Writer',
  components: {},
  data () {
    return {
      active: 0,
      writerName: '村长赵大宝',
      workNumber: '12',
      writerDes: '好多字简介好多字简介好多字简介好多字简介好多字简介好多字简介好多字简介好多字简介好多字简介好多字简介好多字简介',
      books: [
        { id: '1', img: '', title: 'xxxx', chapter: '123' },
        {
          id: '2',
          img: '',
          title: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
          chapter: '123'
        },
        { id: '3', img: '', title: 'xxxx', chapter: '123' },
        { id: '4', img: '', title: 'xxxx', chapter: '123' }
      ],
    }
  },
  methods: {
    onClickLeft () {
      goBack()
    },
    evtUniverse () {
      goUniverse()
    },
  }
}
</script>

<style scoped>
  .writer {
    width: 100vw;
    height: 100vh;
    font-size: 28px;
  }
  .dis-flex {
    display: flex;
    align-items:center;
    justify-content:center;
    padding: 16px 32px;
  }
  .dis-flex p {
    margin: 0;
    font-size: 24px;
    color: #909399;
    max-width: 450px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .writer h4 {
    margin: 0;
    padding: 16px 0;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .flex1 {
    flex: 1;
  }
  .flex2 {
    flex: 2;
  }
  .flex3 {
    flex: 3;
  }
  .flex4 {
    flex: 4;
  }
  .writer-head-img {
    height: 100px;
    width: 100px;
    border-radius:50%;
    -webkit-border-radius:50%;
    -moz-border-radius:50%;
    margin-top: 15px;
  }
  .content-text {
    padding: 16px 32px;
  }
  .content_box {
    display: inline-block;
    padding: 16px;
    font-size: 24px;
  }
  .content_book_title {
    font-size: 30px;
    max-width: 300px;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .img-box {
    display: inline-block;
    vertical-align: top;
  }

  .img-box img {
    padding: 8px 16px;
  }
  .book-img {
    width: 176px;
    height: 240px;
  }
  .content_box .content_icon {
    vertical-align: text-bottom;
    color: red;
  }

  .content_box .content_intro {
    word-break: break-all;
    max-width: 450px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
</style>
