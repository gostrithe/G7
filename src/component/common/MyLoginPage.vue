<template>
    <div class="form-forgot" id="findPasswordForm" action="" name="login" method="POST">
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
    <button class="finish-button">{{buttonconten}}</button>
</template>

<script>
export default {
    props:{
        buttonconten:{
            type:String,
            default:"完成"
        }
    }
}
</script>

<style lang="scss" scoped>
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
</style>