<template>
  <div class="container">
    <b-row no-gutters class="books">
      <b-col 
        v-for="(book, index) in books" :key="index" 
        cols="12" 
        lg="4"
        class="p-2"
      >
        <b-card :title="book.name">
          <b-card-text>
            <NuxtLink :to="`/book/${book.id}`">Abrir</NuxtLink>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import BibleService from '../services/bible'

export default {
  async asyncData({}) {
    const books = await BibleService.getNameAndQuantityOfChapters()
    return { books }
  },
  data(){
    return {
      books: []
    }
  },
}
</script>

<style>
.books{
  margin: 0 auto;
  margin-top: 3%;
  margin-bottom: 3%;
  width:90%;
}
</style>
