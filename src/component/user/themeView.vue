<template>
    <div>
        <!-- 主题 {{ this.$route.path }} -->
        <MyHeaderNavBar :myheadernavbar="true" :showRight="true" title="" leftText="霸总" />

        <div class="big_class-comic">
            <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                <div :class="`class-comic-item class-comic-item-${novel.comic_id}`" v-for="novel in dataList"
                    :key="novel.comic_id" @click="$router.push(`/${novel.comic_id}`)">
                    <img :src="`${novel.cover}!banner-600-x`" alt="">
                    <p class="comic-name">{{ novel.title }}</p>
                    <p class="comic-update">更新至第{{ novel.chapter_num }} 话</p>
                </div>
            </van-list>
        </div>
    </div>
</template>

<script>
import { getFirstData, updateData } from '../../api/theme';
import MyHeaderNavBar from '@common/MyHeaderNavBar.vue';
import { ref } from 'vue';

export default {
    components: {
        MyHeaderNavBar,
    },
    data() {
        return {
            dataList: [],
            loading: false,
            finished: false
        };
    },
    methods: {
        async onLoad() {
            // 异步更新数据
            const data = await updateData();
            this.dataList = this.dataList.concat(data);
            // 加载状态结束
            this.loading = false;
            // 数据全部加载完成
            if (this.dataList.length >= 100) {
                this.finished = true;
            }
        }
    },
    async mounted() {
        console.log('主题页面加载');
        const data = await getFirstData();
        this.dataList = this.dataList.concat(data);
    },
};
</script>

<style lang="scss" scoped>
.big_class-comic {
    padding-top: 8vw;
    ;
}

.class-comic-item {
    display: inline-block;
    width: 29vw;
    height: 40vw;
    margin: 3vw 2vw;

    .comic-name {
        font-size: 4vw;
        font-weight: 1000;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .comic-update {
        font-size: 0.4vw;
        color: gray;
    }

}
</style>