<template>
    <div class="user-index">
        <div class="mine-header">
            <div class="mine-header-avatar">
                <a href="#">
                    <img src='../../public/imgs/pic_user_wdl.png' alt="默认头像">
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
export default {
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
@import '@assets/variable.scss';


.user-index {
    background-color: $myGray1;
    height: 100%;
    

    .mine-header {
        width: 100%;
        height: (100vw / 3.75);
        background: url('../../public/imgs/bg_me_top.png') no-repeat center center;
        overflow: hidden;
        display: flex;

        .mine-header-avatar {
            box-sizing: border-box;
            width: (60vw/3.75);
            height: (60vw/3.75);
            float: left;
            margin-top: (15vw/35);
            margin-left: (15vw/35);
            // margin-right:10px;
            border: 2px solid #fff;
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
            margin-top: (26vw/3.75);
            margin-left: 10px;
            flex: 2;



            .mine-header-text1 {
                font-size: 18px;
                padding-bottom: 5px;
                font-weight: 20px;


            }

            .mine-header-text2 {
                font-size: 12px;
                ;
            }
        }

        .mine-button {
            flex: 1;
            width: 30px;
            height: 25px;
            // position: absolute;
            // top: 2rem;
            // right: 0.4rem;
            margin-top: 40px;
            margin-right: 10px;
            border-radius: 20px;
            color: $myOrange;
            // background-color: $myWhite;
            border: 1px solid $myWhite;
            font-size: 13px;
            text-align: center;
        }

    }

    .mine-account {
        background-color: #fff;
        border-radius: 10px;
        // position: absolute;
        margin-top: -10px;
        padding-bottom: 4px;

        .mine-account-info {
            display: flex;
            padding: 10px 0;


            .num {
                height: 20px;
                padding-top: 10px;
                color: gray
            }

            a {
                width: 100%;
                height: 100%;
                text-decoration: none;
                color: black;

                .van-icon {
                    display: block;
                    text-align: center;
                    color: $myOrange;
                    font-size: 30px;


                }

                span {
                    display: block;
                    text-align: center;
                    font-size: 10px;
                    color: gray
                }


                ;

            }

        }

        .mine-account-image {
            display: block;
            width: 350px;
            height: 60px;
            margin: 10px auto;
            background: url('../../public/imgs/pic_me_vipimg.png') no-repeat center center;
            background-size: cover;
            // margin-bottom: 20px;
        }
    }

    // .mine-select-list {
    //     .mine-select-item {
    //         box-sizing: border-box;
    //         display: block;
    //         width: 100%;
    //         height: 3rem;
    //         font-size: 1rem;
    //         margin: 0.21333vw 0;
    //         padding: 0 0.4rem;
    //         line-height: 8rem;
    //         // font-size: 2rem;
    //         background: #fff;
    //         // display: flex;



    //     }

    // }
    .van-cell-group {
        background-color: $myGray1;
        margin-top: 7px;

        .van-cell {
            margin-bottom: 7px;
            height: 50px;
            font-size: 14px;
            line-height: 30px;
          
        }

    }
}
</style>