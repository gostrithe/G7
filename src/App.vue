<template>
  <div>
    <Suspense>
      <template #default>
        <router-view></router-view>
      </template>
    </Suspense>


    <van-tabbar v-if="!$route.params.id" v-model="active" active-color="#ff7830" inactive-color="#999">
      <van-tabbar-item name="home" to="/" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item name="category" to="/category/" icon="bookmark-o">分类</van-tabbar-item>
      <van-tabbar-item name="bookshelf" to="/user/bookshelf/" icon="like-o">书架</van-tabbar-item>
      <van-tabbar-item name="user" to="/user/" icon="smile-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const active = ref("home");
    return { active };
  },
};

</script>

<style lang="scss" scoped>

</style>