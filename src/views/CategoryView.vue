<template>
    <div>
        <van-tabs v-model:active="activeTab" line-width="10px" line-height="4px" color="#FF7830"
            title-active-color="#FF7830" shrink @click-tab="onClickTab">
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
                <CategoryAttributePage />
            </van-tab>
        </van-tabs>
        <router-link class="catagory-search" to="/search"></router-link>
        <main>
            <!-- 路由出口 router-link对应的内容会呈现在RouterView容器中 -->
            <RouterView />
        </main>
    </div>
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
    },
    methods: {
        onClickTab({ name }) {
            switch (name) {
                case 0:
                    this.$router.push("/category/theme");
                case 1:
                    this.$router.push("/category/progress");
                    break;
                case 2:
                    this.$router.push("/category/masses");
                    break;
                case 3:
                    this.$router.push("/category/attribute")

            }
        },
    },
    mounted() {
        switch (this.$route.path) {
            case "/category/theme":
                this.activeTab = 0;
                break;
            case "/category/progress":
                this.activeTab = 1;
                break;
            case "/category/masses":
                this.activeTab = 2;
                break;
            case "/category/attributeds":
                this.activeTab = 3;
                break;
        }
    },
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