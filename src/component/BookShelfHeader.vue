<template>
    <div class="header-bookshelf">
        <a class="link-item active" href="#">
            <span>历史</span>
            <span class="underline"></span>
        </a>
        <a class="link-item" href="#">
            <span>收藏</span>
        </a>

        <div class="history-settle"></div>
    </div>
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

    .active {
        font-weight: 1000;
        color: #FF620E;

        .underline {
            position: absolute;
            left: 8vw;
            bottom: 3vw;
            width: 4vw;
            height: 0.5vw;
            background: #FF620E;
            border-radius:1vw;
        }
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
</style>