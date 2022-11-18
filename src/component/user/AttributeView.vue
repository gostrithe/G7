<template>
    <div>
        <!-- 主题 {{ this.$route.path }} -->
        <MyHeaderNavBar :myheadernavbar="true" :showRight="true" title="" leftText="免费" />
        <div class="big_class-comic">
            <div :class="`class-comic-item class-comic-item-${novel.comic_id}`" v-for="novel in dataList"
                :key="novel.comic_id">
                <img :src="`${novel.cover}!banner-600-x`" alt="">
                <p class="comic-name">{{ novel.title }}</p>
                <p class="comic-update">更新至第{{ novel.chapter_num }} 话</p>
            </div>
        </div>
    </div>
</template>

<script>
import { getAttributeData } from '../../api/attribute'
import MyHeaderNavBar from '@common/MyHeaderNavBar.vue'
export default {
    components: {
        MyHeaderNavBar,
        getAttributeData,
    },
    data() {
        return {
            dataList: []
        }
    },
    async mounted() {
        console.log('主题页面加载');
        const data = await  getAttributeData();
        this.dataList = data;
    },
};
</script>

<style lang="scss" scoped>
.big_class-comic {
    padding-top: 8vw;
    padding-bottom: 20vw;
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