<template>
    <div v-if="djzpNovels.hot">
        <div class="box">
            <slot></slot>

            <hotNovelItem @click="onClickHandler(djzpNovels.hot.id)" :src="djzpNovels.hot.src" :fireNumber="djzpNovels.hot.fireNumber" :title="djzpNovels.hot.novelName" :label="djzpNovels.hot.desc"></hotNovelItem>

            <div class="novelList">
                <van-grid :border="false" :column-num="3.08">
                    <van-grid-item v-for="novel in djzpNovels.novelList" :key="novel.id" @click="onClickHandler(novel.id)">
                        <novelItem height="150" :src="novel.src" :title="novel.novelName" :label="novel.desc"></novelItem>
                    </van-grid-item>
                </van-grid>
            </div>
        </div>

        <div class="imgBox" @click="onClickHandler(djzpNovels.adNovel.id)">
            <van-image width="100%" height="100%" :src="djzpNovels.adNovel.src" />
        </div>
    </div>
</template>

<script>
import novelItem from './novelItem.vue'
import hotNovelItem from './hotNovelItem.vue'
export default {
    props: {
        'djzpNovels': Object
    },
    components: {
        novelItem,
        hotNovelItem
    },
    methods: {
        onClickHandler(id) {
            this.$router.push(`/${id}/`);
        }
    },
};
</script>

<style lang="scss" scoped>

.imgBox {
    margin: 16px 0 26px;
    height: 131px;
    // padding-bottom: 15px;
    // background: url('/imgs/bg_gg_bg.png');
    box-shadow: 7px 5px 5px rgba(0, 0, 0, .3);
}
</style>