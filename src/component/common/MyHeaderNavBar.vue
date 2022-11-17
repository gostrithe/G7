<template>
    <div>
        <van-nav-bar fixed="true" :title="title" :left-text="leftText" left-arrow   @click-left="onClickLeft">
            <template #right>
                <slot name="myleft">
                    <!-- 如果用户没有传递myleft的内容 则默认使用如下内容 -->
                    <van-icon name="search" size="18" />
                </slot>
            </template>
            <template #title>
                <span class="title">{{ title }}</span>
            </template>
            <template #right v-if="showRight">
                <van-icon name="search" size="24" color="#666" />
            </template>
        </van-nav-bar>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: " ",
        },
        leftText:{
            type:String,
            default:"霸总"
        }
    },
    setup() {
        const onClickLeft = () => history.back();
        return {
            onClickLeft,
        };
    },
};

</script>

<style lang="scss" scoped>

</style>