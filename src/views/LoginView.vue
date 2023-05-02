<template>
    <div>
        <div class="login-header-wrapper">
            <div class="login-header">
                <a class="header-back" href="javascript:history.back()"></a>

                <router-link class="header-forgot" to="/forgot">
                    忘记密码
                </router-link>
            </div>
            <div class="login-header-logo"></div>
        </div>
        <van-form @failed="onFailed">
            <van-cell-group class="vangroup" inset>
                <!-- 通过 pattern 进行正则校验 -->
                <van-field class="vanfield" v-model="value1" label="用户名" name="pattern" placeholder="请输入手机号/用户名"
                    :rules="[{ pattern, message: '请输入正确手机号/用户名' }]" />
                <!-- 通过 validator 进行函数校验 -->
                <van-field class="vanfield" v-model="value2" label="密码" name="validator" placeholder="请输入密码"
                    :rules="[{ validator, message: '请输入正确的密码' }]" />


            </van-cell-group>
            <div style="margin: 16px;">
                <van-button class="vanbutton" round block type="primary" native-type="submit">
                    登录
                </van-button>
            </div>
        </van-form>

        <p class="fast-register">
            <router-link class="text" to="/register">手机号快速注册</router-link>

            <van-icon name="arrow" />
        </p>
        <div class="login-other-fn clearfix">
            <div class="login-other-title">其他方式登录</div>
            <div class="login-others">
                <a class="login-fn-qq">QQ</a>
                <a class="login-fn-weibo">微博</a>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { Toast } from 'vant';

export default {
    setup() {
        const value1 = ref('');
        const value2 = ref('');
        const value3 = ref('abc');
        const value4 = ref('');
        const pattern = /\d{6}/;

        // 校验函数返回 true 表示校验通过，false 表示不通过
        const validator = (val) => /1\d{10}/.test(val);

        // 校验函数可以直接返回一段错误提示
        const validatorMessage = (val) => `${val} 不合法，请重新输入`;

        // 校验函数可以返回 Promise，实现异步校验
        const asyncValidator = (val) =>
            new Promise((resolve) => {
                Toast.loading('验证中...');

                setTimeout(() => {
                    Toast.clear();
                    resolve(val === '1234');
                }, 1000);
            });

        const onFailed = (errorInfo) => {
            console.log('failed', errorInfo);
        };

        return {
            value1,
            value2,
            value3,
            value4,
            pattern,
            onFailed,
            validator,
            asyncValidator,
        };
    },
};

</script>

<style lang="scss" scoped>
.login-header-wrapper {
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
            margin-right: 3vw;
            margin-top: 3vw;
            font-size: 4vw;
            color: black;
        }
    }

    .login-header-logo {
        width: 28vw;
        height: 18vw;
        margin: 10vw auto;
        background: url('https://raw.githubusercontent.com/gostrithe/G7/main/imgs/pic_login_logo@2x.png') no-repeat center center;
        background-size: cover;
    }
}

.fast-register {
    display: block;
    margin-top: 1vw;
    font-size: 4vw;
    line-height: 2vw;
    text-align: center;
    color: black;
}

.login-other-fn {
    .login-other-title {
        width: 58vw;
        height: 10vw;
        margin: 22vw auto 0;
        color: #999;
        line-height: 10vw;
        text-align: center;
        background-image: url('https://raw.githubusercontent.com/gostrithe/G7/main/imgs/bg_login_qtfsdl@2x.png');
        background-size: cover;
    }

    .login-others {
        display: flex;
        margin-left: 39vw;

        .login-fn-qq {
            display: block;
            background-image: url('https://raw.githubusercontent.com/gostrithe/G7/main/imgs/ic_login_qq@2x.png');
            width: 12vw;
            height: 16vw;
            padding-top: 10vw;
            font-size: 3vw;
            color: #999;
            text-align: center;
            background-position: top center;
            background-size: 10vw;
            background-repeat: no-repeat;
        }

        .login-fn-weibo {

            background-image: url('https://raw.githubusercontent.com/gostrithe/G7/main/imgs/ic_login_wb@2x.png');
            width: 12vw;

            height: 16vw;
            padding-top: 10vw;
            font-size: 3vw;
            color: #999;
            text-align: center;
            background-position: top center;
            background-size: 10vw;
            background-repeat: no-repeat;
        }
    }
}

.vanbutton {
    background-color: #FF620E;
    width: 78vw;
    // height: 12vw;
    margin: 0 auto;
    font-size: 5vw;
}

.vanfield {
    width: 74vw;
    // height: 12vw;
    margin: 0 auto;
    color: #eee;
}
</style>