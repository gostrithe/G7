<template>
    <div>
        <div class="login-header-wrapper">
            <!-- <div class="login-header">
            <a class="header-back" href="javascript:history.back()"></a>
            <a class="header-forgot">忘记密码</a>
        </div> -->
            <MyHeaderNavBar left-text="忘记密码" />
            <div class="login-header-logo"></div>
        </div>
        <!-- <div class="form-forgot" id="findPasswordForm" action="" name="login" method="POST">
        <div class="phone-input">
            <span class="phone86">+86</span>
            <input class="input" id="phoneInput" type="text" name="phone" placeholder="请输入手机号" maxlength="11">
        </div>
        <div class="code-input">
            <input class="input" id="codeInput" type="text" name="code" placeholder="手机验证码">
            <span class="code-btn">获取验证码</span>
        </div>
        <div class="password-input">
            <input class="input" id="password" type="password" name="password" placeholder="设置密码">
        </div>
    </div>
    <button class="finish-button">完成</button> -->
        <MyLoginPage buttonconten="完成" />
    </div>
</template>

<script>
import MyHeaderNavBar from "@common/MyHeaderNavBar.vue";
import MyLoginPage from "@common/MyLoginPage.vue";
export default {
    components: {
        MyHeaderNavBar,
        MyLoginPage
    }
};
</script>

<style lang="scss" scoped>
.login-header-wrapper {
    // background-color: #F8F0FB;
    height: 20vw;


    .login-header {
        width: 100%;
        height: 6vw;

        .header-back {
            float: left;
            width: 6vw;
            height: 4vw;
            margin-left: 4vw;
            margin-top: 4vw;
            background: url('/imgs/ic_nav_return_login@2x.png') no-repeat center center;
            background-size: cover;
        }

        .header-forgot {
            float: right;
            // text-decoration: none;
            // outline: none;
            color: gray;
            margin-right: 68vw;
            margin-top: 2vw;
            font-size: 5vw;
            color: black;
        }
    }
}
</style>