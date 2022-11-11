<template>
    <div>
        <van-swipe :autoplay="3000" lazy-render height="250">
            <van-swipe-item v-for="novel in bannerNovels" :key="novel.id">
                <img :src="novel.src" @click="onImgClick(novel.id)" />
            </van-swipe-item>
        </van-swipe>

        <van-button to="/search" square type="primary"></van-button>

        <van-grid :border="false" :column-num="3">
            <van-grid-item>
                <van-image src="../../public/imgs/home_gx.png" />
            </van-grid-item>
            <van-grid-item>
                <van-image src="../../public/imgs/home_ph.png" />
            </van-grid-item>
            <van-grid-item>
                <van-image src="../../public/imgs/home_xs.png" />
            </van-grid-item>
        </van-grid>

        <div class="kzjp">
            <van-cell title="客栈精品" icon="../../public/imgs/ic_home_jp.png" is-link value="更多" />
            <van-grid :border="false" :column-num="3">
                <van-grid-item>
                    <van-image src="https://unpkg.com/@vant/assets/apple-1.jpeg" />
                </van-grid-item>
                <van-grid-item>
                    <van-image src="https://unpkg.com/@vant/assets/apple-2.jpeg" />
                </van-grid-item>
                <van-grid-item>
                    <van-image src="https://unpkg.com/@vant/assets/apple-3.jpeg" />
                </van-grid-item>
            </van-grid>
        </div>

    </div>
</template>

<script>
import { getBannerUrl } from '../api/home';

export default {
    data() {
        return {
            bannerNovels: []
        };
    },
    methods: {
        onImgClick(id) {
            this.$router.push(`/${id}`);
        }
    },
    async mounted() {
        const data = await getBannerUrl();
        this.bannerNovels = data.bannerNovels;
    },
};
</script>

<style lang="scss" scoped>
.van-button {
    position: absolute;
    right: 0;
    top: 0;
    width: 31px;
    height: 31px;
    background: url('@imgs/ic_home_search.png') transparent center no-repeat;
    background-size: contain;
    border: none;
    transform: translate(-50%, 50%);
}
</style>