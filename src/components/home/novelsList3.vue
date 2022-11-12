<template>
    <div>
        <div class="list">
            <van-grid :border="false" :column-num="3.1">
                <van-grid-item v-for="novel in novelList" :key="novel.id" @click="onClickHandler(novel.id)">
                    <novelItem :src="novel.src" :title="novel.novelName" :label="novel.desc"></novelItem>
                </van-grid-item>
            </van-grid>
        </div>
    </div>
</template>

<script>
import novelItem from './novelItem.vue';

export default {
    props: ['novelList'],
    components: {
        novelItem,
    },
    methods: {
        onClickHandler(id) {
            this.$router.push(`/${id}/`);
        }
    },
};
</script>

<style lang="scss" scoped>
.list {
    margin-top: 6px;
}
</style>