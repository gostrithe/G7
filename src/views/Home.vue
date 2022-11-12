<template>
    <div>
        <homeHeader :bannerNovels="bannerNovels"></homeHeader>

        <div class="center-wrapper">
            <homeKzjp :kzjpNovels="kzjpNovels"></homeKzjp>

            <van-divider :style="{ borderColor: '#bbb', margin: '6px -12px' }" />

            <mainContent :djzpNovels="djzpNovels">
                <van-cell class="title" title="独家作品" icon="/imgs/ic_home_dj.png" is-link value="更多" />
            </mainContent>

            <homeSszk :sszkNovels="sszkNovels"></homeSszk>

            <van-divider :style="{ borderColor: '#bbb', margin: '6px -12px' }" />

        </div>


        <footer>
            <van-image width="40" height="52" src="/imgs/pic_home_footimg.png" />
        </footer>

    </div>
</template>

<script>
import { getBannerUrl } from '../api/home';
import homeHeader from '../components/home/homeHeader.vue';
import mainContent from '../components/home/mainContent.vue';
import homeKzjp from '../components/home/home-kzjp.vue';
import homeSszk from '../components/home/home-sszk.vue';

export default {
    components: {
        homeHeader,
        mainContent,
        homeKzjp,
        homeSszk
    },
    data() {
        return {
            bannerNovels: [],
            kzjpNovels: [],
            djzpNovels: {},
            sszkNovels: {},
        };
    },
    async mounted() {
        const { data } = await getBannerUrl();
        this.bannerNovels = data.bannerNovels;
        this.kzjpNovels = data.kzjpNovels;
        this.djzpNovels = data.djzpNovels;
        this.sszkNovels = data.sszkNovels;
    },
};
</script>

<style lang="scss" scoped>
.center-wrapper {
    padding: 0 12px;
}

footer {
    display: flex;
    justify-content: center;
    padding-bottom: 70px;
}
</style>