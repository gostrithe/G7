<template>
  <div>
    <Suspense>
      <template #default>
        <router-view v-slot="{ Component }">
          <!-- 底部导航条切换组件添加过渡效果 -->
          <transition name="slide-fade" mode="out-in">
            <!-- 缓存组件，切换组件后仍然保持活跃 -->
            <keep-alive exclude="NovelView">
              <component :is="Component" />
            </keep-alive>
          </transition>
        </router-view>
      </template>
    </Suspense>


    <van-tabbar v-if="condition" v-model="active" active-color="#ff7830" inactive-color="#999">
      <van-tabbar-item name="home" to="/" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item name="category" to="/category/" icon="bookmark-o">分类</van-tabbar-item>
      <van-tabbar-item name="bookshelf" to="/user/bookshelf/" icon="like-o">书架</van-tabbar-item>
      <van-tabbar-item name="user" to="/user/" icon="smile-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { ref } from 'vue';
import home from './api/home';

export default {
  // setup() {
  //   const active = ref("home");
  //   return { 
  //     active 
  //   };
  // },
  data() {
    return {
      condition: true,
      active: 'home'
    };
  },
  // !($route.params.id || $route.params.themeId)
  watch: {
    $route(e) { // 监听$route，自动传入 route对象
      const name = e.name;
      const params = e.params;
      if (name == 'login' || name == 'register' || name == 'notFound' || name == 'forgot') {
        this.condition = false;
      } else if (params.id || params.themeId || params.progressId || params.massesId || params.attributeId) {
        this.condition = false;
      } else {
        this.condition = true;
      }

      switch (name) {
        case 'category':
          this.active = 'category'
          break;
        case 'userHistory':
          this.active = 'bookshelf'
          break;
        case 'userCollection':
          this.active = 'bookshelf'
          break;
        case 'user':
          this.active = 'user'
          break;
      }
    }
  },
};

</script>

<style lang="scss" scoped>

</style>