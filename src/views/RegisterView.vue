<template>
    <div class="login-header-wrapper">
        <MyHeaderNavBar left-text="注册"/>
        <!-- <div class="login-header">
            <a class="header-back" href="javascript:history.back()"></a>
            <a class="header-forgot">注册</a>
        </div> -->

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
    <button class="finish-button">注册</button> -->
    <MyLoginPage buttonconten="注册"/>
    <p class="protocol">注册即视为同意<a>《漫客栈App用户协议》</a></p>
</template>

<script>
import MyHeaderNavBar from "@common/MyHeaderNavBar.vue"
import MyLoginPage from "@common/MyLoginPage.vue"
export default {
 components:{
    MyHeaderNavBar,
    MyLoginPage
 }

}
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
            background: url('https://raw.githubusercontent.com/gostrithe/G7/main/imgs/ic_nav_return_login@2x.png') no-repeat center center;
            background-size: cover;
        }

        .header-forgot {
            float: right;
            // text-decoration: none;
            // outline: none;
            color: gray;
            margin-right: 80vw;
            margin-top: 2vw;
            font-size: 5vw;
            color: black;
        }
    }
}

.form-forgot {
    background-color: #fff;

    .phone-input {
        box-sizing: border-box;
        width: 77vw;
        height: 10vw;
        margin: -2vw auto;
        font-size: 4vw;
        line-height: 10vw;
        border: 0.1vw solid #ddd;
        border-radius: 50vw;
        overflow: hidden;
        position: relative;
        text-align: center;

        .phone86 {
            margin-left: -12vw;
        }

        .input {
            border: 1vw solid white;
        }
    }

    .code-input {
        box-sizing: border-box;
        width: 78vw;
        height: 10vw;
        margin: 4vw auto;
        font-size: 4vw;
        line-height: 10vw;
        border: 0.1vw solid #ddd;
        border-radius: 50vw;
        overflow: hidden;
        position: relative;
        text-align: center;

        .input {
            border: 1vw solid white;
            height: 8vw;
        }
    }

    .password-input {
        box-sizing: border-box;
        width: 78vw;
        height: 10vw;
        margin: -2vw auto;
        font-size: 4vw;
        line-height: 10vw;
        border: 0.1vw solid #ddd;
        border-radius: 50vw;
        overflow: hidden;
        position: relative;
        text-align: center;

        .input {
            width: 68vw;
            border: 1vw solid white;

        }
    }
}

.finish-button {
    display: block;
    width: 80vw;
    height: 12vw;
    margin: 7vw auto 0;
    font-size: 5vw;
    text-align: center;
    line-height: .16vw;
    color: #fff;
    background: #FF620E;
    border: 0;
    border-radius: 23vw;
}

.protocol {
    font-size: 3vw;
    text-align: center;
    margin-top: 0.3vw;
    color: #b4b4b4;
}
</style>