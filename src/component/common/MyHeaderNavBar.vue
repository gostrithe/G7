<template>
    <div>
        <van-nav-bar :class="{ myheadernavbar:myheadernavbar }" class="myheadernavbar_fixed" :fixed="true"
            :title="title" :left-text="leftText" left-arrow @click-left="onClickLeft">
            <template #title>
                <span class="title">{{ title }}</span>
            </template>
            <template #right v-if="showRight">
                <van-icon name="search" size="8vw" color="#FF620E" />
            </template>
            <template #right>
                <slot name="myright">
                    <span></span>
                </slot>
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
        leftText: {
            type: String,
            default: "返回"
        },
        showRight: {
            type: Boolean,
            default: false,
        },
        myheadernavbar: {
            type: Boolean,
            default: false,
        }
    },
    setup() {
        const onClickLeft = () => {

            history.back();
        }
        return {
            onClickLeft,
        };
    },
};

</script>

<style lang="scss" scoped>
.myheadernavbar_fixed {
    --van-nav-bar-icon-color: black;
    // --van-nav-bar-height:6vw;
    --van-nav-bar-arrow-size:6vw;
    // --van-nav-bar-title-font-size:5vw;
}

.myheadernavbar {
    --van-nav-bar-icon-color: #FF620E;
}
</style>