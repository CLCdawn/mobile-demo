<template>
  <div class="universe">
    <van-nav-bar
      class="nav-bar"
      title="小说宇宙"
      left-arrow
      :fixed="true"
      :placeholder="true"
      @click-left="evtBack"
    ></van-nav-bar>
    <div class="bg">
      <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2555483946,680280199&fm=26&gp=0.jpg" alt="">
      <div class="mengban"></div>
    </div>
    <div class="brief">
      <div class="brief-name">{{universeName}}</div>
      <div class="brief-introduction">{{brief}}</div>
    </div>
    <div class="novel-list">
      <div
        class="novel-card"
        v-for="(item, index) in novelList"
        :key="index">
        <div class="novel-cover">
          <img :src="item.coverUrl" alt="">
        </div>
        <div class="novel-info">
          <p style="font-size: 18px;font-weight: 500;">{{item.title}}</p>
          <p style="font-size: 14px;font-weight: 300;margin-bottom: 7px;">{{item.author}}&nbsp;{{item.type}}</p>
          <p class="novel-info-intro" style="font-size: 14px;font-weight: 300;">{{item.introduction}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { goBack } from '@/biz/path'
export default {
  name: 'Book',
  components: {
  },
  created () {
    console.log(this.$router, this.$route)
  },
  data () {
    return {
      universeName: '赛博朋克',
      brief: '经典的赛博朋克角色是边缘且性格疏远的独行者。他们生活在社会群体的边缘，一个弥漫反乌托邦氛围的未来。',
      novelList: [
        {
          coverUrl: 'https://bookcover.yuewen.com/qdbimg/349573/1012902516/180',
          title: '庆余年',
          author: '猫腻',
          type: '古装',
          introduction: '经典的赛博朋克角色是边缘且性格疏远的独行者。他们生活在社会群体的边缘，一个弥漫反乌托邦氛围的未来。'
        },
        {
          coverUrl: 'https://bookcover.yuewen.com/qdbimg/349573/1012902516/180',
          title: '庆余年',
          author: '猫腻',
          type: '古装',
          introduction: '经典的赛博朋克角色是边缘且性格疏远的独行者。他们生活在社会群体的边缘，一个弥漫反乌托邦氛围的未来。'
        },
        {
          coverUrl: 'https://bookcover.yuewen.com/qdbimg/349573/1012902516/180',
          title: '庆余年',
          author: '猫腻',
          type: '古装',
          introduction: '经典的赛博朋克角色是边缘且性格疏远的独行者。他们生活在社会群体的边缘，一个弥漫反乌托邦氛围的未来。'
        },
        {
          coverUrl: 'https://bookcover.yuewen.com/qdbimg/349573/1012902516/180',
          title: '庆余年',
          author: '猫腻',
          type: '古装',
          introduction: '经典的赛博朋克角色是边缘且性格疏远的独行者。他们生活在社会群体的边缘，一个弥漫反乌托邦氛围的未来。经典的赛博朋克角色是边缘且性格疏远的独行者。他们生活在社会群体的边缘，一个弥漫反乌托邦氛围的未来。'
        }
      ]
    }
  },
  computed: {

  },
  methods: {
    evtBack () {
      goBack()
    }
  }
}
</script>

<style scoped>
.bg{
  display: inline-block;
  position: relative;
}
.bg img{
  width: 100vw;
  z-index: 1;
}
.bg .mengban{
  z-index: 2;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-image: linear-gradient(
    rgba(255,255,255,0),
    rgba(255,255,255,0.1),
    rgba(255,255,255,1)
  );
}
.brief {
  /* mix-blend-mode: darken; */
  position: relative;
  margin: 0 3vw;
  margin-top: -10vh;
  padding: 25px 30px;
  background: #ffffff;
  border-radius: 20px;
  z-index: 10;
  box-shadow: 5px 5px 5px #f5f5f5;
}
.brief-introduction{
  color: #535353;
  font-size: 32px;
}
.brief-name{
  color: #262626;
  font-size: 40px;
}
.novel-card{
  display: flex;
  padding: 20px 3vw;
  height: 255px;
  cursor: pointer;
}
.novel-card p{
  margin-top: 0;
  margin-bottom: 0.2rem;
  color: #262626;
}
.novel-card .novel-cover{
  width: 25vw;
  margin-right: 4vw;
}
.novel-card .novel-cover img{
  width: 100%;
}
.novel-card .novel-info {
  width: 65vw;
}
.novel-card .novel-info-intro{
  display: -webkit-box;             /*将对象转为弹性盒模型展示*/
  -webkit-box-orient: vertical;     /*设置弹性盒模型子元素的排列方式*/
  -webkit-line-clamp: 3;            /*限制文本行数*/
  overflow: hidden;                 /*超出隐藏*/
}
</style>
