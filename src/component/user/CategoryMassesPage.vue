<template>
    <ul class="clearfix">
        <li :id="index"
            :style="{ backgroundImage: `url(https://static.mkzcdn.com/mobile/img/catalogs/shouzong/pic_class_img${index}@2x.png)` }"
            class="catalog-item" v-for="index  in imgArrIndex">
            <a :href="`/category/masses/${index}`"></a>

        </li>
    </ul>

</template>

<script>
export default {
    data() {
        return {
            index: 28,
            imgArrIndex: [28, 29, 30, 31]
            // backgroundimage:
        }
    },
}
</script>

<style lang="scss" scoped>
@import "../../assets/variable.scss";
.clearfix {
    width: 100%;
    height: 100%;

    .catalog-item {
        @include  catalog-item;

        // overflow:hidden;  
        a {
            @include Aattribute;
        }
    }
}
</style>