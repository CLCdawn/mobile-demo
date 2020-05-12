<template>
  <div class="find">
    <header class="header">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        input-align="center"
      />
      <van-tabs v-model="tabActive">
        <van-tab title="大说">
          <div class="home">
            <div class="content">
              <div class="img-box">
                <img
                  class="book-img"
                  src="../../assets/logo.png"
                >
              </div>
              <div class="content_box">
                <van-icon name="fire" class="content_icon"/>
                <span>天帝帝帝帝帝</span>
                <p><span>作者名</span><span>&nbsp;&nbsp;&nbsp;都市</span></p>
                <p class="content_intro">
                  contenentcontenentcontenentcontenentcontenentcontenentcontentcontenentcontenentcontenentcontenentcontenentcontenentcontent</p>
              </div>
            </div>

            <van-grid :border="false" :column-num="4">
              <van-grid-item
                v-for="book in books"
                :key="book.id"
                @click="evtGoBook(book)"
              >
                <img class="book_img" src='../../assets/logo.png'/>
                <div class="book-title">
                  <span>{{book.title}}</span>
                </div>
              </van-grid-item>

            </van-grid>

            <van-divider/>
            <h3>宇宙世界观</h3>
            <van-tabs v-model="active" swipeable type="line" :border="false" :line-height="0" :color="'#ff6700'"
                      :background="'#ffffff'">
              <van-tab v-for="(item) in categoryList" :title="item.name">
                <template #title>
                  <div class="tabs-icon-style">{{item.name}}</div>
                  <span class="tabs-title-style">{{item.name}}</span>
                </template>
                <van-grid clickable :column-num="1">
                  <van-grid-item
                    v-for="(book,index) in item.books" :key="index"
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
                        <span>{{book.name}}</span>
                        <p><span>作者名</span><span>&nbsp;&nbsp;&nbsp;都市</span></p>
                        <p class="content_intro">
                          contenentcontenentcontenentcontenentcontenentcontenentcontentcontenentcontenentcontenentcontenentcontenentcontenentcontent</p>
                      </div>
                    </div>

                  </van-grid-item>
                </van-grid>
              </van-tab>
            </van-tabs>
          </div>
        </van-tab>
        <van-tab title="宇宙"></van-tab>
        <van-tab title="作者">
          <div class="writer">
            <div v-for="item in 3">
              <div class="dis-flex">
                <div class="flex1" @click="writerDes()">
                  <img class="writer-head-img" src="../../assets/logo.png" alt="">
                </div>
                <div class="flex4">
                  <h4>作者名作者名</h4>
                  <p>简介简介简介简介简介简介简介简介简介简简介简介简介简介简简介简介简介简介简介简介简简介简介简介简介简简介简介简介简介简介简介</p>
                </div>
                <div class="flex1" @click="readMore">
                  <a class="more-all">查看全部</a>
                </div>
              </div>

              <van-grid :border="false" :column-num="4">
                <van-grid-item
                  v-for="book in books"
                  :key="book.id"
                  @click="evtGoBook(book)"
                >
                  <img class="book_img" src='../../assets/logo.png'/>
                  <div class="book-title">
                    <span>{{book.title}}</span>
                  </div>
                </van-grid-item>
              </van-grid>
              <van-divider/>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </header>
  </div>
</template>

<script>
import { goUniverse, goBook, goFind, goWriter } from '@/biz/path'

export default {
  name: 'Find',
  components: {},
  data () {
    return {
      active: '',
      value: '',
      tabActive: 2,
      books: [
        { id: '1', img: '', title: 'xxxx', chapter: '123' },
        {
          id: '2',
          img: '',
          title: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
          chapter: '123'
        },
        { id: '3', img: '', title: 'xxxx', chapter: '123' },
        { id: '4', img: '', title: 'xxxx', chapter: '123' }
      ],
      categoryList: [
        {
          name: '科技宇宙',
          books: [
            {
              name: 'kkkkkkkkkkkk',
              imgUrl: '../../assets/logo.png'
            }, {
              name: 'kkkkkkkkkkkk',
              imgUrl: '../../assets/logo.png'
            }, {
              name: 'kkkkkkkkkkkk',
              imgUrl: '../../assets/logo.png'
            }
          ]
        },
        {
          name: '科技宇宙',
          books: [
            {
              name: '234324',
              imgUrl: '../../assets/logo.png'
            }, {
              name: '42342',
              imgUrl: '../../assets/logo.png'
            }, {
              name: '423423',
              imgUrl: '../../assets/logo.png'
            }
          ]
        },
        {
          name: '科技宇宙',
          books: [
            {
              name: 'kkk89089kkkkkkkkk',
              imgUrl: '../../assets/logo.png'
            }, {
              name: 'kkkkk08908kkkkkkk',
              imgUrl: '../../assets/logo.png'
            }, {
              name: 'kkkk89080kkkkkkkk',
              imgUrl: '../../assets/logo.png'
            }
          ]
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
      ],
      swiperOptions: {
        effect: 'coverflow',
        slidesPerView: 5,
        centeredSlides: true,
        coverflowEffect: {
          rotate: 0,
          stretch: -200,
          depth: 400,
          modifier: 2,
          slideShadows: false
        }
      }
    }
  },
  methods: {
    evtUniverse () {
      goUniverse()
    },
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
      // console.log(require('../../../assets/logo.png'))
      goBook(book.id)
    },
    writerDes () {
      console.log(66666)
      goWriter()
    },
    readMore () {
      this.$toast('查看更多');
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

  .find h3 {
    padding: 8px 16px;
  }
/*writer =========================*/
  .dis-flex {
    display: flex;
    align-items:center;
    justify-content:center;
    padding: 8px 16px;
  }
  .writer p {
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
    padding: 8px 0;
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
  .more-all {
    display: inline-block;
    font-size: 20px;
    color: #909399;
    border: 1px solid #909399;
    border-radius: 40px;
    padding: 6px 10px;
    align-items: flex-start;
  }
/*writer =========================*/
/*home =========================*/
  .img-box {
    display: inline-block;
    vertical-align: top;
  }

  .img-box img {
    padding: 8px 16px;
  }

  .content {
    margin-bottom: 50px;
  }

  .content_box {
    display: inline-block;
    padding: 8px;
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

  .tabs-icon-style {
    width: 100px;
    height: 100px;
    border: 1px solid #cccccc;
    border-radius: 50%;
    font-size: 20px;
    text-align: center;
    line-height: 100px;
    background: #cccccc;
    color: #ffffff;
  }

  .book_img {
    width: 100%;
    height: 100%;
  }

  .book-img {
    width: 176px;
    height: 240px;
  }

  .book-title span {
    display: inline-block;
    max-width: 100px;
    margin-top: 24px;
    color: #333333;
    font-weight: 500;
    font-size: 28px;
    line-height: 28px;
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  ::v-deep .home .van-tabs--line .van-tabs__wrap {
    text-align: center;
    height: auto !important;
  }

  ::v-deep .home .van-tab--active .tabs-icon-style {
    border: 2px solid lightskyblue;
  }

  ::v-deep .home .van-tab--active .tabs-title-style {
    color: lightskyblue;
    font-weight: 500;
  }
/*home =========================*/

</style>
