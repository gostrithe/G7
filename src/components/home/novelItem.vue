<template>
    <div>
        <van-image :radius="radius || 4" :height="height || 150" width="100%" :src="src" />
        <van-cell :title="title" :label="label" />
    </div>
</template>

<script>
export default {
    props: ['radius', 'height', 'src', 'title', 'label']
};
</script>

<style lang="scss" scoped>
.content .van-cell,
.novelList .van-cell {
    padding: 0;
}

</style>