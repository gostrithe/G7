<template>
    <div v-if="sszkNovels.topTwo" class="sszk">
        <div class="titleBox">
            <van-cell class="title" title="上升最快" icon="/imgs/ic_home_ss.png" is-link value="更多" />
        </div>

        <div v-for="novel in sszkNovels.topTwo" :key="novel.id" @click="onClickHandler(novel.id)">
            <van-card :title="novel.novelName" :thumb="novel.src">
                <template #desc>
                    <p class="info">{{ novel.type }}</p>
                    <p class="info">周点击：<strong>{{ novel.weekVisit }}</strong></p>
                    <p class="info">{{ novel.desc }}</p>
                </template>
            </van-card>
        </div>

        <novelsList3 :novelList="sszkNovels.novelList"></novelsList3>
    </div>
</template>

<script>
import novelsList3 from './novelsList3.vue';
export default {
    props: {
        'sszkNovels': Object
    },
    components: {
        novelsList3
    },
    methods: {
        onClickHandler(id) {
            this.$router.push(`/${id}/`);
        }
    },
};
</script>

<style lang="scss" scoped>
.sszk {

    .info {
        font-size: 12px;
        line-height: 1.3;
        color: #999;
        margin-top: 12px;

        strong {
            color: #ff7830;
        }
    }
}
</style>