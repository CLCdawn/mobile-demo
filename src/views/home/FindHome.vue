<template>
  <div class="find-home">
    <BookItem :book="masterBook"></BookItem>
  </div>
</template>

<script>
import BookItem from '@/components/BookItem'
export default {
  name: 'FindHome',
  components: { BookItem },
  data () {
    return {
      masterBook: {
        img: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/2080331685/O1CN01NfJlPg1OJlxwqwsTa_!!0-item_pic.jpg',
        tags: ['热门'],
        name: 'xxxxx',
        author: 'xxx',
        category: '都市',
        brief: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
      },
      books: [
        { img: '', tags: '', name: '', author: '', category: '', brief: '' }
      ]
    }
  },
  methods: {}
}
</script>

<style scoped>
.find-home {
}
</style>
