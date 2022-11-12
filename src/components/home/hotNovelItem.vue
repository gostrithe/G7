<template>
    <div v-if="src">
        <div class="content">
            <van-image radius="6" height="200" width="100%" :src="src" />
            <van-tag color="rgba(0,0,0,0.5)" round type="primary">
                <van-icon name="fire" />{{ fireNumber }}
            </van-tag>

            <van-cell :title="title" :label="label" />
        </div>
    </div>
</template>

<script>
export default {
    props: ['id', 'src', 'fireNumber', 'title', 'label'],
    
};
</script>

<style lang="scss" scoped>
.content {
    position: relative;

    .van-tag {
        position: absolute;
        top: 10px;
        right: 4px;
        padding: 2px 6px;
    }

}
</style>