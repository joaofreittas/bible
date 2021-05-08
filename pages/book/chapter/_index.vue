<template>
  <div class="container">
    <b-row no-gutters class="books">
      <b-col cols="12"><h3>Capítulo {{ id }}</h3></b-col>
      <b-col cols="12">
        <p v-for="(verse, index) in verses" :key="index" class="verse">
          {{ index + 1 }} {{verse}}
        </p>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import BibleService from '../../../services/bible'
export default {
  async asyncData({params, query}) {
    let { index: idChapter } = params
    const { book: idBook } = query
    const verses = await BibleService.getChapterByBook(idBook, idChapter)
    const book = await BibleService.getBook(idBook)
    const id = Number(idChapter) + 1
    return { verses, id, book }
  },
  data(){
    return {
      book:{},
      id: null,
      verses: [],
    }
  },
}
</script>
<style>
  .verse{
    margin:0 auto;
    margin-top:1%;
  }
</style>