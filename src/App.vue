<template>
    <NotFound />
    <!-- <UserView /> -->
</template>

<script>
import UserView from './views/UserView.vue';
import  NotFound from './views/NotFound.vue'
  export default {
    components: {
      UserView,
      NotFound,
    }
  }
</script>

<style lang="scss" scoped>

</style>