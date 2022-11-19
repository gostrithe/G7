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