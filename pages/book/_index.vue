<template>
  <div class="container">
    <b-row no-gutters class="books">
      <b-col cols="12" class="p-2"><h3>{{ book.name }}</h3></b-col>
      <b-col 
        v-for="(chapter, index) in book.chapters" :key="index" 
        cols="12" 
        lg="4"
        class="p-2"
      >
        <b-card :title="`${index + 1}`">
          <b-card-text>
            <NuxtLink :to="`/book/chapter/${ index }?book=${id}`">Abrir</NuxtLink>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import BibleService from '../../services/bible'
export default {
  async asyncData({params}) {
    const {index: id} = params;
    const book = await BibleService.getBook(id)
    return { book, id }
  },
  data(){
    return {
      book: {},
      id: null,
    }
  },
}
</script>