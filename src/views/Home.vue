<template>
    <div>
        <van-swipe :autoplay="3000" lazy-render height="250">
            <van-swipe-item v-for="image in images" :key="image">
                <img :src="image" />
            </van-swipe-item>
        </van-swipe>

    </div>
</template>

<script>
export default {
    setup() {
        const images = [
            'https://unpkg.com/@vant/assets/apple-1.jpeg',
            'https://unpkg.com/@vant/assets/apple-2.jpeg',
        ];
        return { images };
    },
};
</script>

<style lang="scss" scoped>
    
</style>