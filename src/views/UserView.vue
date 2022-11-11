<template>

    <body class="user-index">
        <header class="mine-header">
            <div class="mine-header-avatar">
                <a href="#">
                    <img src='../assets/imgs/pic_user_wdl.png' alt="默认头像">
                </a>
            </div>
            <div class="mine-header-text">
                <p class="mine-header-text1">游客</p>
                <p class="mine-header-text2">VIP到期时间:{{ time }}</p>
            </div>
            <button class="mine-button">登录/注册</button>
        </header>
        <div class="mine-account">
            <div class="mine-account-info">
                <a href="#" class="mine-account-button">
                    <van-icon name="paid" />
                    我的账户
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
        <div class="mine-select-list">
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
        </div>
    </body>
</template>

<script>
export default {
    components: {

    }

}
</script>

<style lang="scss" scoped>
@import '@assets/variable.scss';

.user-index {
    .mine-header {
        width: 100%;
        height: 5.5rem;
        background: url('../assets/imgs/bg_me_top.png') no-repeat center center;
        overflow: hidden;
        display: flex;

        .mine-header-avatar {
            box-sizing: border-box;
            width: 3.6rem;
            height: 3.6rem;
            float: left;
            margin-top: 0.8rem;
            margin-left: 0.5rem;
            margin-right: 0.5rem;
            border: 0.05rem solid #fff;
            border-radius: 50%;
            overflow: hidden;
            // flex: 1;

            a {
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }

        .mine-header-text {
            color: $myWhite;
            margin-top: 2rem;
            flex: 2;

            .mine-header-text1 {
                font-size: 1rem;
            }

            .mine-header-text2 {
                font-size: 0.5rem;
                ;
            }
        }

        .mine-button {
            flex: 1;
            width: 6rem;
            height: 2rem;
            position: absolute;
            top: 2rem;
            right: 0.4rem;
            border-radius: 2rem;
            color: $myOrange;
            background-color: $myWhite;
            border: 0.5rem solid $myWhite;
        }

    }

    .mine-account {
        .mine-account-info {
            display: flex;

            a {
                width: 100%;
                height: 100%;
                text-decoration: none;
                color: black;

                .van-icon {
                    display: block;
                    text-align: center;

                }

                span {
                    display: block;
                    text-align: center;

                }

                ;

            }
        }
    }

    .mine-select-list {
        .mine-select-item{
            box-sizing: border-box;
            display: block;
            width: 100%;
            height: 1rem;
            margin: 0.21333rem 0;
            padding: 0 0.4rem;
            line-height: 1rem;
            font-size: 2rem;
            background: #fff;
        }
    }
}
</style>