<template>
    <div>
        主题 {{ this.$route.path }}
        <div v-for="novel in dataList" :key="novel.comic_id">
            <img :src="`${novel.cover}!banner-600-x`" alt="">
            <h4>{{ novel.title }}</h4>
            <p>更新至第 {{ novel.chapter_num }} 话</p>
        </div>
    </div>
</template>

<script>
import { getFirstData } from '../api/theme'
    export default {
    data() {
        return {
            dataList: []
        }
    },
    async mounted() {
        console.log('主题页面加载');
        const data = await getFirstData();
        this.dataList = data
    },
};
</script>

<style lang="scss" scoped>

</style>