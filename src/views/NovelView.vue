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
                详情
                <template>
                    <div>
                        
                    </div>
                </template>
            </van-tab>
            <van-tab title-style="font-size: 16px;" title="目录" name="list">目录</van-tab>
        </van-tabs>
    </div>

</template>

<script setup>
import parseThemeId from '../api/parseThemeId';
import { reactive, ref, toRefs } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getNovelDetail, getReadCount, getColletionCount } from '../api/home';

const route = useRoute();
const router = useRouter();
const onClickLeft = () => history.back();
const goHome = () => router.push('/');
const onClickButton = () => alert('点击按钮');
/* 
    异步请求拿取数据，<script setup>最上层可以直接使用await，但是必须配合<Suspense>（在app.vue）使用。
    <Suspense> is an experimental feature and its API will likely change.慎用    
*/
const data = await getNovelDetail(route.params.id);
// console.log(reactive(data));  // 响应式data的副本
const { title, cover_lateral, theme_id, author_id } = toRefs(reactive(data));

let readCount = ref(0);
readCount.value = await getReadCount(route.params.id);
let colletionCount = ref(0);
colletionCount.value = await getColletionCount(route.params.id);

const activeName = ref('list');

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
</style>