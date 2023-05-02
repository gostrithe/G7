<template>
    <div class="bigbox">
        <div v-if="!this.$route.path.includes('/theme')">
            <van-tabs v-model:active="activeName" line-width="10px" line-height="4px" color="#FF7830"
                title-active-color="#FF7830" shrink @change="onChange" @click-tab="onClickTab" duration="0.4" :sticky="true" animated
                swipeable>
                <van-tab title="题材" name="/">
                    <CategoryThemePage />
                </van-tab>
                <van-tab title="进度" name="/progress">
                    <div class="emptyBox">
                        <CategoryProgressPage v-show="condition" />
                    </div>
                </van-tab>
                <van-tab title="受众" name="/masses">
                    <div class="emptyBox">
                        <CategoryMassesPage v-show="condition" />
                    </div>
                </van-tab>
                <van-tab title="属性" name="/attribute">
                    <div class="emptyBox">
                        <CategoryAttributePage v-show="condition" />
                    </div>
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
import { ref } from 'vue';


export default {
    data() {
        return {
            activeTab: 0,
            condition: true,
            activeName: '/'
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
                    this.$router.push("/category");
                    break;
                case 1:
                    this.$router.push("/category/progress");
                    break;
                case 2:
                    this.$router.push("/category/masses");
                    break;
                case 3:
                    this.$router.push("/category/attribute");
            }
        },
        onChange() {
            this.$router.push(`/category${this.activeName}`)
        }
    },
    updated() {
        this.condition = true;
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
// .emptyBox {
//     height: 77vh;
// }

.catagory-search {
    position: fixed;
    z-index: 777;
    right: 4vw;
    top: 2vw;
    width: 7vw;
    height: 7vw;
    background-image: url('https://raw.githubusercontent.com/gostrithe/G7/main/imgs/ic_nav_search_b@2x.png');
    background-size: cover;
    background-color: white;
}

.bigbox {
    padding-bottom: 70px;
}

</style>