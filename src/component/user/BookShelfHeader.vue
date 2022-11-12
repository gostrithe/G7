<template>
    <div class="header-bookshelf">
        <router-link class="link-item" to="/user/history" active-class="active">
            <span>历史</span>
            <span class="underline"></span>
        </router-link>

        <router-link class="link-item" to="/user/collection" active-class="active">
            <span>收藏</span>
            <span class="underline"></span>
        </router-link>



        <div class="history-settle"></div>
    </div>

    <!-- <div class="header-bookshelf">
        <van-tabs shrink v-model:active="active">
            <van-tab to="/user/history/" title="历史">
            </van-tab>
            <van-tab to="/user/collection/" title="收藏">
            </van-tab>
        </van-tabs>

        <router-view></router-view>
    </div> -->



</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header-bookshelf {
    height: 10vw;

    // display: flex;
    .link-item {

        float: left;
        width: 20vw;
        height: 14vw;
        // padding-right: 5vw;
        font-size: 5vw;
        line-height: 12vw;
        position: relative;
        color: gray;
        margin-right: -4vw;
        font-size: 5vw;
        text-align: center;

    }



    .history-settle {
        float: right;
        width: 7vw;
        height: 7vw;
        margin-top: 3vw;
        margin-right: 3vw;
        background-image: url('/imgs/ic_list_arrange@2x.png');
        background-size: cover;
    }
}

.active {
    span {
        font-weight: 1000;
        color: #FF620E;
    }

    .underline {
        position: absolute;
        left: 8vw;
        bottom: 3vw;
        width: 4vw;
        height: 0.5vw;
        background: #FF620E;
        border-radius: 1vw;
    }
}
</style>