<script>
import BookItem from '@/components/Home/BookItem.vue';
import { useBookStore } from '@/stores/book';
import { mapStores } from 'pinia';

export default {
  name: 'BookList',
  setup() {
    // const store = useBookStore().books;
    return {
      // store,
    };
  },
  computed: {
    ...mapStores(useBookStore),
  },
  components: {
    BookItem,
  },
  methods: {},

  data() {
    return {};
  },
};
</script>

<template>
  <div class="container BookList">
    <BookItem
      v-for="book in bookStore.getBooksFromTitle(bookStore.searchTitle)"
      :key="book._id"
      :data="book"
    ></BookItem>
  </div>
</template>

<style lang="scss">
.BookList {
  min-height: 75vh;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px 0px;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
}
</style>
