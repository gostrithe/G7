<template>
    <div>
        <h1>小说详情与目录</h1>
        {{ this.$route.params.id }}
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log(this.$route);
        },
    }
</script>

<style lang="scss" scoped>

</style>