<template>
    <div class="navBar">
        <van-nav-bar :title="title" left-arrow @click-left="onClickLeft" :border="false">
            <template #right>
                <van-icon name="/imgs/ic_nav_share.png" size="21" />
                <van-icon @click="goHome" name="/imgs/ic_nav_gohome.png" size="21" />
            </template>
        </van-nav-bar>
    </div>

    <div class="coverBox">
        <van-image fit="contain" width="100%" height="210" :src="`${cover_lateral}!banner-600-x`" />
        <div class="info">
            <p class="title">{{ title }}</p>
            <p class="underTitle">主笔id:{{ author_id }}</p>
            <p class="underTitle">{{ parseThemeId(theme_id) }}</p>
            <div class="hotNumber">
                <van-icon name="fire" />{{ readCount }}
            </div>
        </div>
        <div class="shadow">
            <img class="bg1" src="/imgs/bg_detail_bannerbg.png">
            <img class="bg2" src="/imgs/bg_banner.png">
        </div>
    </div>

    <div class="beginAndContinute">
        <van-action-bar>
            <van-action-bar-icon icon="/imgs/ic_detail_coll_off.png" :text="`收藏(${colletionCount})`" />
            <van-action-bar-button type="danger" text="开始阅读" @click="onClickButton" />
        </van-action-bar>
    </div>

    <div class="detailAndList">
        <van-tabs v-model:active="activeName" line-width="55" color="#ff7830" title-active-color="#000">
            <van-tab title-style="font-size: 16px;" title="详情" name="detail">
                <template #default>
                    <div>
                        <div class="detailInfo">
                            {{ content }}
                            <div class="notice">
                                {{ notice }}
                            </div>
                        </div>
                        <div class="recommend">
                            <h3>^_^主人，这有相关漫画为你推荐~</h3>
                            <!-- <novelsList3></novelsList3> -->
                        </div>
                    </div>
                </template>
            </van-tab>
            <van-tab title-style="font-size: 16px;" title="目录" name="list">
                <template #default>
                    <div>
                        <div class="listTop">
                            <h5>连载</h5>
                            <span class="van-ellipsis">{{ new Date((start_time * 1000)).toLocaleDateString().split('/').join('.')
                            }}更新至{{ updateInfo }}</span>
                            <div class="sortBtn">
                                <div class="iconSort"></div>
                                正序
                            </div>
                        </div>
                    </div>
                </template>
            </van-tab>
        </van-tabs>
    </div>

    <div class="bottomBar">
        <a href="#">
            <div class="item">
                <i class="yp"></i>
                <span>月票</span>
            </div>
        </a>
        <a href="#">
            <div class="item">
                <i class="ds"></i>
                <span>打赏</span>
            </div>
        </a>
        <a href="#">
            <div class="item">
                <i class="share"></i>
                <span>分享</span>
            </div>
        </a>
    </div>

</template>

<script setup>
// import novelsList3 from '../components/home/novelsList3.vue';
import parseThemeId from '../api/parseThemeId';
import { reactive, ref, toRefs } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getNovelDetail, getReadCount, getColletionCount, getNovelList } from '../api/home';

const route = useRoute();
const id = route.params.id;
const router = useRouter();
const onClickLeft = () => history.back();
const goHome = () => router.push('/');
const onClickButton = () => alert('点击按钮');
/* 
    异步请求拿取数据，<script setup>最上层可以直接使用await，但是必须配合<Suspense>（在app.vue）使用。
    <Suspense> is an experimental feature and its API will likely change.慎用    
*/
const data = await getNovelDetail(id);
// console.log(reactive(data));  // 响应式data的副本
const { title, cover_lateral, theme_id, author_id, content, notice } = toRefs(reactive(data));

let readCount = ref(0);
readCount.value = await getReadCount(id);
let colletionCount = ref(0);
colletionCount.value = await getColletionCount(id);

const activeName = ref('list');

// let novelList = ref([]);
let novelList = await getNovelList(id);
let { start_time, title: updateInfo } = novelList[novelList.length - 1]


</script>

<style lang="scss">
:root {
    --van-nav-bar-height: 50px
}

.navBar {
    .van-nav-bar {
        .van-icon {
            // color: #FF620E;
            color: #ff7830;
            font-size: 24px;
        }

        .van-nav-bar__right {
            i:first-child {
                margin-right: 16px;
            }
        }
    }
}

.coverBox {
    color: #fff;
    position: relative;

    .info {
        position: absolute;
        bottom: 15%;
        left: 5%;
        width: 95%;
        z-index: 2;

        .title {
            font-size: 20px;
            margin-bottom: 2px;
        }

        .underTitle {
            font-size: 12px;
            line-height: 1.5;
            margin-bottom: 4px;
        }

        .hotNumber {
            position: absolute;
            right: 5%;
            bottom: 0;
            padding: 3px 8px;
            font-size: 12px;
            background: rgba(0, 0, 0, 0.5);
            border-radius: 11px;

            .van-icon-fire {
                margin-right: 4px;
            }
        }
    }

    .bg1,
    .bg2 {
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 1;
        height: auto;
    }
}

.beginAndContinute {
    position: relative;
    height: 70px;

    .van-action-bar {
        position: absolute;
        top: 0;
        left: 0;
        padding: 10px 10px 10px 15px;

        .van-action-bar-icon {
            flex: 1;
            flex-direction: row;
            align-items: center;
            font-size: 15px;
            padding: 5px 0;
            box-sizing: border-box;

            .van-action-bar-icon__icon {
                margin: 0;
                margin-right: 8px;
                width: 24px;
                height: 24px;
                top: -2px;

                .van-icon__image {
                    width: 100%;
                    height: 100%;
                }
            }
        }

        .van-action-bar-button {
            flex: none;
            width: 200px;
            background: #ff7830;
            font-size: 18px;
        }
    }
}

.detailAndList {
    .van-tabs__nav {
        justify-content: center;
    }

    .van-tab {
        flex: none;
        margin: 0 20px;
        padding: 0 6px;
    }

    .van-tab--active {
        font-weight: bold;
    }
}

.detailInfo {
    padding: 15px 15px 20px;
    font-size: 14px;
    border-bottom: 8px solid #f6f6f7;

    .notice {
        margin-top: 4px;
        font-size: 12px;
        color: #999;
        line-height: 1.5;
    }
}

.recommend {
    padding: 15px;

    h3 {
        font-size: 14px;
        font-weight: normal;
    }
}

.bottomBar {
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    height: 50px;
    border-top: 1px solid #ddd;

    a {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #28292d;
    }

    i {
        display: inline-block;
        position: relative;
        top: 6px;
        margin-right: 4px;
        width: 24px;
        height: 24px;
    }

    .yp {
        background: url('/imgs/ic_detail_tab_yp.png');
        background-size: contain;
    }

    .ds {
        background: url('/imgs/ic_detail_tab_ds.png');
        background-size: contain;
    }

    .share {
        background: url('/imgs/ic_detail_tab_fx.png');
        background-size: contain;
    }
}

.listTop {
    position: relative;
    display: flex;
    align-items: center;
    padding: 12px 12px 0 ;
    height: 32px;
    box-sizing: border-box;
    border-top: 1px solid #ebebeb;
    h5 {
        position: relative;
        top: -1px;
        width: 42px;
        font-size: 16px;
        font-weight: normal;
        margin-right: 3px;
    }

    .sortBtn {
        display: flex;
        align-items: center;
        position: absolute;
        top: 13px;
        right: 12px;
        font-size: 12px;
        .iconSort {
            width: 14px;
            height: 14px;
            background: url('/imgs/ic_detail_zjsx.png');
            background-size: contain;
            margin-right: 3px;
        }
    }
    span {
        padding-right: 48px;
        font-size: 12px;
        color: #999;
    }
}
</style>