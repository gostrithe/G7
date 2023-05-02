<template>
    <div class="kzjp">
        <van-cell to="/wonderful/" class="title" title="客栈精品" icon="https://raw.githubusercontent.com/gostrithe/G7/main/imgs/ic_home_jp.png" is-link value="更多" />
        <div class="content">
            <van-grid :border="false" column-num="2.02">
                <van-grid-item v-for="novel in kzjpNovels" :key="novel.id" @click="onClickHandler(novel.id)">
                    <novelItem :id="novel.id" height="97" :src="novel.src" :title="novel.novelName" :label="novel.desc">
                    </novelItem>
                </van-grid-item>
            </van-grid>
        </div>
    </div>
</template>

<script>
import novelItem from './novelItem.vue';

export default {
    props: ['kzjpNovels'],
    components: {
        novelItem
    },
    methods: {
        onClickHandler(id) {
            this.$router.push(`/${id}/`);
        }
    },
};
</script>

<style lang="scss" scoped>

</style>