<template>
    <van-tabs v-model:active="active" line-width="10px" line-height="4px" color="#FF7830" title-active-color="#FF7830"
        shrink>
        <van-tab title="题材">
            <CategoryThemePage />
        </van-tab>
        <van-tab title="进度">
            <CategoryProgressPage />
        </van-tab>
        <van-tab title="受众">
            <CategoryMassesPage />
        </van-tab>
        <van-tab title="属性">
            <CategoryAttributePage  />
        </van-tab>
    </van-tabs>
    <router-link class="catagory-search" to="/search"></router-link>
</template>

<script>
import CategoryThemePage from '../component/user/CategoryThemePage.vue'
import CategoryProgressPage from '../component/user/CategoryProgressPage.vue'
import CategoryMassesPage from '../component/user/CategoryMassesPage.vue'
import CategoryAttributePage from '../component/user/CategoryAttributePage.vue'
export default {
    components: {
        CategoryThemePage,
        CategoryProgressPage,
        CategoryMassesPage,
        CategoryAttributePage
    }
}
</script>

<style lang="scss" scoped>
.catagory-search {
    position: absolute;
    right: 4vw;
    top: 2vw;
    width: 7vw;
    height: 7vw;
    background-image: url('/imgs/ic_nav_search_b@2x.png');
    background-size: cover;
    background-color: white;
}
</style>