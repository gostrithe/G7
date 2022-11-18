<template>
    <form action="/">
        <van-search 
        v-model="value" show-action placeholder="解离妖圣" 
        action-text="搜索"
        @search="onSearch" @cancel="onCancel" />
    </form>

</template>

<script>
import { ref } from 'vue';
import { Toast } from 'vant';

export default {
    setup() {
        const value = ref('');
        const onSearch = (val) => Toast(val);
        const onCancel = () => Toast('请输入内容');
        return {
            value,
            onSearch,
            onCancel,
        };
    },
};


</script>

<style lang="scss" scoped>

</style>