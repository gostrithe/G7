<template>
  <!-- <NotFound /> -->
  <BookshelfView />

  <!-- <UserView /> -->
</template>

<script>
import UserView from './views/UserView.vue';
import NotFound from './views/NotFound.vue';
import BookshelfView from './views/BookshelfView.vue'

export default {
  components: {
    UserView,
    NotFound,
    BookshelfView,
  },

}
</script>

<style lang="scss" scoped>

</style>