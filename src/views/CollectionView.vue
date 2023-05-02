<template>
    <div class="no-login-collection">
        <div class="no-login-image"></div>
        <p class="no-login-text">登录同步收藏信息，更新有提醒哦~</p>
        <!-- <button class="no-login-button">立即登录</button> -->
        <router-link class="no-login-button" to="/login">立即登录</router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.no-login-collection {
    text-align: center;
    padding-top: 42vw;

    .no-login-image {
        width: 36vw;
        height: 36vw;
        margin-top: 20vw;
        margin: 0 auto;
        background-image: url('https://raw.githubusercontent.com/gostrithe/G7/main/imgs/pic_default_colllogin@2x.png');
        background-size: cover;
    }

    .no-login-text {
        font-size: 4vw;
        color: gray;
        margin-top: 2vw;
    }

    .no-login-button {
        display: block;
        box-sizing: border-box;
        width: 36vw;
        height: 10vw;
        margin: 12vw auto;
        font-size: 4vw;
        line-height: 10vw;
        color: #FFFFFF;
        background: #FF620E;
        border-radius: 12vw;
        border: 1vw solid white;
        margin-top: 4vw;
    }
}
</style>