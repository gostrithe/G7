<template>
    <ul class="clearfix">
        <li :style="{ backgroundImage: `url(https://static.mkzcdn.com/mobile/img/catalogs/ticai/pic_class_img${index}@2x.png)`}"
            class="catalog-item" v-for="index  in 25" :id="index">
            <a :href="`/category/theme/${index}`"></a>
        </li>
    </ul>

</template>

<script>
export default {
    data() {
        return {
            // backgroundimage:
        }
    },
}
</script>

<style lang="scss" scoped>
.clearfix {
    width: 100%;
    height: 100%;

    .catalog-item {
        display: inline-block;
        width: 45vw;
        height: 26vw;
        opacity: 1;
        background-size: contain;
        background-repeat: no-repeat;
        list-style: none;
        margin: 2vw 2vw;
        padding: 0;

        // overflow:hidden;  
        a {
            display: block;
            width: 46vw;
            height: 26vw;

        }
    }
}
</style>