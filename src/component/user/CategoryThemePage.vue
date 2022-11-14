<template>
    <ul class="clearfix">
        <li :style="{backgroundImage: backgroundimage}"  class="catalog-item"  v-for="n in 23">{{ n }}</li>
    </ul>

</template>

<script>
export default {
    data() {
        return {
            backgroundimage: `url(https://static.mkzcdn.com/mobile/img/catalogs/ticai/pic_class_img${1}@2x.png)`
        }
    }
}
</script>

<style lang="scss" scoped>
.clearfix {
    .catalog-item {
        display: inline-block;
        width: 50vw;
        height: 30vw;
        opacity: 1;
        background-size: contain;


    }
}
</style>