<template>
    <div>
        <div class="no-login-history">
            <div>
                <span>登录同步阅读历史，追更很简单~</span>
                <router-link class="btn_dl" to="/login" >
                    <span>登录</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.no-login-history {
    display: flex;
    box-sizing: border-box;
    width: 100%;
    padding-left: 14vw;
    font-size: 4vw;
    font-weight: 400;
    color: #2b0e0e;
    line-height: 12vw;
    background-color: #F7F6F6;
    background-image: url(https://raw.githubusercontent.com/gostrithe/G7/main/imgs/pic_sj_qdl@2x.png);
    background-repeat: no-repeat;
    background-size: 9vw;
    background-position: 4vw 1vw;



    .btn_dl {
        float: right;
        width: 13vw;
        margin-right: -24vw;
        margin-top: 2vw;
        font-size: 2vw;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 5vw;
        text-align: center;
        background: #DA966B;
        border-radius: 20vw;
        border: 1vw solid white;
    }
}
</style>