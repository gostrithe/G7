<template>
    <div class="user-index">
        <div class="mine-header">
            <div class="mine-header-avatar">
                <a href="#">
                    <img src='@public/imgs/pic_user_wdl.png' alt="默认头像">
                </a>
            </div>
            <div class="mine-header-text">
                <p class="mine-header-text1">游客</p>
                <p class="mine-header-text2">VIP到期时间:{{ time }}</p>
            </div>
            <button class="mine-button">登录/注册</button>
        </div>

        <div class="mine-account">
            <div class="mine-account-info">
                <a href="#" class="mine-account-button">
                    <van-icon name="paid" />
                    <span class="text">我的账户</span>
                    <span class="button-shadow"></span>
                </a>
                <a href="#" class="mine-account-gold">
                    <span class="num">- -</span>
                    <span class="text">元宝</span>
                </a>
                <a href="#" class="mine-account-ticket">
                    <span class="num">- -</span>
                    <span class="text">月票</span>
                </a>
                <a href="#" class="mine-account-ticket2">
                    <span class="num">- -</span>
                    <span class="text">阅读券</span>
                </a>
            </div>
            <a href="#" class="mine-account-image"></a>
        </div>

        <!-- <div class="mine-select-list">
            <a href="#" class="mine-select-item">
                <span class="text">我的购买</span>
                <span class="num"></span>
                <span class="icon-more"></span>
            </a>
            <a href="#" class="mine-select-item j-go-app">
                <span class="text">个性装扮</span>
                <span class="text2">前往APP，获取个性头像框</span>
            </a>
            <a href="#" class="mine-select-item">
                <span class="text">意见反馈</span>
                <span class="icon-more"></span>
            </a>
        </div> -->

        <van-cell-group>
            <van-cell title="我的购买" value=">" />
            <van-cell title="个性装扮" value="前往APP，获取个性头像框" />
            <van-cell title="意见反馈" value=">" />
        </van-cell-group>


    </div>
</template>

<script>
import HeaderUser from '../component/HeaderUser.vue'
export default {
    components: {
        HeaderUser,
    },
    data() {
        return {
            time: `${new Date().toLocaleDateString()}`
        }
    },
    components: {

    }

}
</script>

<style lang="scss" scoped>
@import '../../style/UserViewStyle.scss'
</style>