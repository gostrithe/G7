/* 实时记录滚动距离，返回跳转路由前的滚动距离状态 */
// scrollY
import { onMounted, onUnmounted, ref } from "vue";
import { useRoute } from "vue-router";


export default function () {
    const route = useRoute();
    const scrollY = ref(0);
    const currentRoute = route.fullPath;

    const handler = (e) => {
        if (route.fullPath === currentRoute) {
            scrollY.value = window.scrollY;
        }
    };

    onMounted(() => {
        window.addEventListener('scroll', handler);
    });
    onUnmounted(() => {
        window.removeEventListener('scroll', handler);
    });

    return scrollY
}