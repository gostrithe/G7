<template>
    <div ref="novelContent" class="novelContent">
        <ul>
            <li v-for="page in pageList" :key="page.page_id">
                <img ref="imgs" :src="page.image">
            </li>
        </ul>
        <div class="poa">
            {{ chapterTitle }}
            <span>{{ pageNum }}/{{ pageList.length }}</span>
        </div>

        <div class="endBox">
            <p>您已阅读完：<span>{{ chapterTitle }}</span></p>
            <div class="btns">
                <a @click="onPreClick">
                    <i class="pre"></i>
                    <span>上一章</span>
                </a>
                <a @click="backToNovelDetail">
                    <i class="back"></i>
                    <span>返回详情</span>
                </a>
                <a @click="onNextClick">
                    <i class="next"></i>
                    <span>下一章</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Toast } from 'vant';
import { computed, inject, onBeforeUnmount, onMounted, onUnmounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getNovelContent, getNovelList } from '../api/home';
const route = useRoute();
const router = useRouter();

const novelList = await getNovelList(route.params.id);
const pageList = await getNovelContent(route.params.id, route.params.chapterId);

const chapterTitle = inject('chapterTitle');
const listIndex = inject('listIndex');
const pageNum = ref(1);

const reg = /\-(\d+)x(\d+).jpg!/;
const heightArr = pageList.map((item) => {
    let imgWidth = reg.exec(item.image)[1];
    let imgHeight = reg.exec(item.image)[2];
    let height = (window.screen.width / imgWidth) * imgHeight;
    return height;
});
heightArr.reduce((pv, cv, index) => {
    heightArr[index] = cv + pv;
    return cv + pv;
}, 0);
heightArr.unshift(0);

// const heightArr = computed(() => {
//     return pageList.map((item) => {
//         let imgWidth = reg.exec(item.image)[1];
//         let imgHeight = reg.exec(item.image)[2];
//         let height = (window.screen.width / imgWidth) * imgHeight;
//         return height;
//     });
// });
// console.log(heightArr.value);

// const imgs = ref(null);
// onMounted(() => {
//     console.log(imgs.value);
//     setTimeout(() => {
//         console.log(imgs.value[0].clientHeight);
//     }, 200);
// })
// let called = false;
// let heightArr = []
// onUpdated(() => {
//     if (!called) {
//         heightArr =  imgs.value.map(img => img.clientHeight)
//         console.log(heightArr);
//         called = true;
//     }
// });

const novelContent = ref(null);
function upDatePageNum(event) {
    if (window.scrollY > heightArr[pageNum.value]) {
        pageNum.value++;
    }
    if (window.scrollY < heightArr[(pageNum.value - 1)]) {
        pageNum.value--;
    }
}
onMounted(() => window.addEventListener('scroll', upDatePageNum));

onBeforeUnmount(() => {
    window.removeEventListener('scroll', upDatePageNum);
});

const onPreClick = () => {
    if (listIndex.value == 0) {
        Toast({
            teleport: '.endBox',
            message: '没有上一话了',
            position: 'bottom',
        });
    }
    // else {
    //     router.push(`/${route.params.id}/${novelList[listIndex.value - 1].chapter_id}`);
    //     listIndex.value--;
    // }
};

const props = defineProps(['sT']);
const backToNovelDetail = () => {
    // console.log(props.sT);
    /* 发现在安卓，效果失效了 */
    // document.documentElement.scrollTop = props.sT;
    /* 下面做兼容 */
    document.documentElement.scrollTop = props.sT;
    document.body.scrollTop = props.sT;
    window.pageYOffset = props.sT;

    router.replace(`/${route.params.id}`);
};

const onNextClick = () => {
}

</script>

<style lang="scss" scoped>
img {
    // height: 100vh;
    vertical-align: middle;
}

.poa {
    position: fixed;
    bottom: 0;
    right: 0;
    font-size: 12px;
    color: #fff;
    padding: 2px 12px;
    background: rgba(0, 0, 0, 0.3);
}

.endBox {
    padding-top: 25px;
    height: 120px;

    p {
        font-size: 1px;
        color: #999;
        text-align: center;
        margin-bottom: 14px;

        span {
            color: #28292d;
        }
    }

    .btns {
        display: flex;
        justify-content: space-evenly;

        a {
            display: flex;
            justify-items: center;
            font-size: 14px;
            color: #666;
        }

        i {
            display: inline-block;
            width: 24px;
            height: 24px;
            background-size: contain;
            margin-right: 6px;
        }

        .pre {
            background-image: url('https://raw.githubusercontent.com/gostrithe/G7/main/imgs/ic_readpage_up.png');
        }

        .back {
            background-image: url('https://raw.githubusercontent.com/gostrithe/G7/main/imgs/ic_readpage_back.png');
        }

        .next {
            background-image: url('https://raw.githubusercontent.com/gostrithe/G7/main/imgs/ic_readpage_down.png');
        }
    }
}
</style>