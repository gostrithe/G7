<template>
    <ul class="clearfix">
        <li :id="n" :style="{ backgroundImage: `url(https://static.mkzcdn.com/mobile/img/catalogs/ticai/pic_class_img${n}@2x.png)`}" 
        class="catalog-item" v-for="n in 23">
    
    </li>
    </ul>

</template>

<script>
export default {
    data() {
        return {
            n: 1,
            // backgroundimage:
        }
    },
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