<template>
    <div>
        <van-swipe :autoplay="3000" lazy-render height="250">
            <van-swipe-item v-for="novel in bannerNovels" :key="novel.id">
                <img :src="novel.src" @click="onImgClick(novel.id)" />
            </van-swipe-item>
        </van-swipe>

        <van-button to="/search/" square type="primary"></van-button>

        <div class="underBanner">
            <van-grid :border="false"  gutter="0" :center="false">
                <van-grid-item to="/update/">
                    <van-image src="/imgs/home_gx.png" />
                </van-grid-item>
                <van-grid-item to="/popularity/">
                    <van-image src="/imgs/home_ph.png" />
                </van-grid-item>
                <van-grid-item url="https://m.xiaoshuohui.com.cn/">
                    <van-image src="/imgs/home_xs.png" />
                </van-grid-item>
            </van-grid>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        "bannerNovels": Array
    }
};
</script>

<style lang="scss" scoped>
.van-button {
    position: absolute;
    right: 0;
    top: 0;
    width: 31px;
    height: 31px;
    background: url('/imgs/ic_home_search.png') transparent center no-repeat;
    background-size: contain;
    border: none;
    transform: translate(-50%, 50%);
}

.underBanner {
    display: flex;
    justify-content: space-between;
    padding: 12px 18px 14px;
}
</style>