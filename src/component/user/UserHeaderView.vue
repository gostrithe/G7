<template>
    <div class="mine-header">
        <div class="mine-header-avatar">
            <a href="#">
                <img src='https://raw.githubusercontent.com/gostrithe/G7/main/imgs/pic_user_wdl.png' alt="默认头像">
            </a>
        </div>
        <div class="mine-header-text">
            <p class="mine-header-text1">游客</p>
            <p class="mine-header-text2">VIP到期时间:{{ `${new Date().toLocaleDateString()}` }}</p>
        </div>

        <router-link class="mine-button" to="/login">
           登录/注册
        </router-link>

    </div>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.mine-button {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>