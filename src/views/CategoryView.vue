<template>
    <div class="bigbox">
        <div v-if="!this.$route.path.includes('/theme')">
            <van-tabs v-model:active="activeTab" line-width="10px" line-height="4px" color="#FF7830"
                title-active-color="#FF7830" shrink @click-tab="onClickTab" duration="0.4" :sticky="true"
                animated swipeable>
                <van-tab title="题材">
                    <CategoryThemePage />
                </van-tab>
                <van-tab title="进度">
                    <CategoryProgressPage v-if="condition"></CategoryProgressPage>
                </van-tab>
                <van-tab title="受众">
                    <CategoryMassesPage v-if="condition"></CategoryMassesPage>
                </van-tab>
                <van-tab title="属性">
                    <CategoryAttributePage v-if="condition"></CategoryAttributePage>
                </van-tab>
            </van-tabs>
            <router-link class="catagory-search" to="/search"></router-link>
        </div>
        <main>
            <!-- 路由出口 router-link对应的内容会呈现在RouterView容器中 -->
            
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
import CategoryThemePage from '../component/user/CategoryThemePage.vue';
import CategoryProgressPage from '../component/user/CategoryProgressPage.vue';
import CategoryMassesPage from '../component/user/CategoryMassesPage.vue';
import CategoryAttributePage from '../component/user/CategoryAttributePage.vue';


export default {
    data() {
        return {
            activeTab: 0,
            condition: true
        };
    },
    components: {
        CategoryThemePage,
        CategoryAttributePage,
        CategoryMassesPage,
        CategoryProgressPage
    },
    methods: {
        onClickTab({ name }) {
            switch (name) {
                case 0:
                    this.condition = false;
                    this.$router.push("/category");
                    break;
                case 1:
                    this.condition = false;
                    this.$router.push("/category/progress");
                    break;
                case 2:
                    this.condition = false;
                    this.$router.push("/category/masses");
                    break;
                case 3:
                    this.condition = false;
                    this.$router.push("/category/attribute");
            }
        },
    },
    mounted() {
        switch (this.$route.path) {
            case "/category":
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
    position: fixed;
    z-index: 777;
    right: 4vw;
    top: 2vw;
    width: 7vw;
    height: 7vw;
    background-image: url('/imgs/ic_nav_search_b@2x.png');
    background-size: cover;
    background-color: white;
}

.bigbox {
    padding-bottom: 70px;
}
</style>