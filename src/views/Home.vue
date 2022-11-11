<template>
    <div>
        <van-swipe :autoplay="3000" lazy-render height="250">
            <van-swipe-item v-for="novel in bannerNovels" :key="novel.id">
                <img :src="novel.src" @click="onImgClick(novel.id)" />
            </van-swipe-item>
        </van-swipe>

        <van-button to="/search/" square type="primary"></van-button>

        <van-grid :border="false" :column-num="3">
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

        <div class="kzjp">
            <van-cell to="/wonderful/" class="title" title="客栈精品" icon="/imgs/ic_home_jp.png" is-link value="更多" />
            <div class="content">
                <van-grid :border="false" :column-num="2">
                    <van-grid-item>
                        <van-image radius="4" height="97" width="100%" src="https://unpkg.com/@vant/assets/cat.jpeg" />
                        <van-cell title="地府我开的" label="业障不除三生七世永堕阎罗" />
                    </van-grid-item>
                    <van-grid-item>
                        <van-image height="97" width="100%" src="https://unpkg.com/@vant/assets/apple-1.jpeg" />
                        <van-cell title="地府我开的" label="业障不除三生七世永堕阎罗" />
                    </van-grid-item>
                    <van-grid-item>
                        <van-image height="97" width="100%" src="https://unpkg.com/@vant/assets/apple-1.jpeg" />
                        <van-cell title="地府我开的" label="业障不除三生七世永堕阎罗" />
                    </van-grid-item>
                    <van-grid-item>
                        <van-image height="97" width="100%" src="https://unpkg.com/@vant/assets/apple-1.jpeg" />
                        <van-cell title="地府我开的" label="业障不除三生七世永堕阎罗" />
                    </van-grid-item>
                </van-grid>
            </div>
        </div>

        <van-divider />

        <div class="djzp">
            <van-cell class="title" title="独家作品" icon="/imgs/ic_home_dj.png" is-link value="更多" />
            <div class="content">
                <van-image radius="6" height="200" width="100%" src="https://unpkg.com/@vant/assets/cat.jpeg" />
                <van-tag color="rgba(0,0,0,0.5)" round type="primary">
                    <van-icon name="fire" />2.09亿
                </van-tag>

                <van-cell title="花千骨" label="跨越仙妖的师徒恋" />

            </div>

            <div class="novelList">
                <van-grid :border="false" :column-num="3" :gutter="10">
                    <van-grid-item>
                        <van-image radius="4" height="97" width="100%" src="https://unpkg.com/@vant/assets/cat.jpeg" />
                        <van-cell title="地府我开的" label="业障不除三生七世永堕阎罗" />
                    </van-grid-item>
                    <van-grid-item>
                        <van-image radius="4" height="97" width="100%" src="https://unpkg.com/@vant/assets/cat.jpeg" />
                        <van-cell title="地府我开的" label="业障不除三生七世永堕阎罗" />
                    </van-grid-item>
                    <van-grid-item>
                        <van-image radius="4" height="97" width="100%" src="https://unpkg.com/@vant/assets/cat.jpeg" />
                        <van-cell title="地府我开的" label="业障不除三生七世永堕阎罗" />
                    </van-grid-item>
                    <van-grid-item>
                        <van-image radius="4" height="97" width="100%" src="https://unpkg.com/@vant/assets/cat.jpeg" />
                        <van-cell title="地府我开的" label="业障不除三生七世永堕阎罗" />
                    </van-grid-item>
                    <van-grid-item>
                        <van-image radius="4" height="97" width="100%" src="https://unpkg.com/@vant/assets/cat.jpeg" />
                        <van-cell title="地府我开的" label="业障不除三生七世永堕阎罗" />
                    </van-grid-item>
                    <van-grid-item>
                        <van-image radius="4" height="97" width="100%" src="https://unpkg.com/@vant/assets/cat.jpeg" />
                        <van-cell title="地府我开的" label="业障不除三生七世永堕阎罗" />
                    </van-grid-item>
                </van-grid>
            </div>



        </div>

        <div class="imgBox">
            <van-image width="100%" height="100%" src="https://unpkg.com/@vant/assets/cat.jpeg" />
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
            this.$router.push(`/${id}/`);
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
    background: url('/imgs/ic_home_search.png') transparent center no-repeat;
    background-size: contain;
    border: none;
    transform: translate(-50%, 50%);
}

.content .van-cell,
.novelList .van-cell {
    padding: 0;
}

.djzp {
    .content {
        position: relative;
        padding: 0 16px;

        .van-tag {
            position: absolute;
            top: 10px;
            right: 20px;
            padding: 2px 6px;
        }

    }

    .novelList {
        padding: 0 6px;
    }
}

.imgBox {
    margin-top: 16px;
    padding: 0 16px;
    height: 131px;
    margin-bottom: 200px;
}
</style>