<template>
    <div class="user-index">
        <UserHeaderView />
        <UserMineAccount />
        <UserSelectView />
    </div>
</template>

<script>
import UserHeaderView from '../component/user/UserHeaderView.vue';
import UserMineAccount from '../component/user/UserMineAccount.vue';
import UserSelectView from '../component/user/UserSelectView.vue';
export default {
    components: {
        UserHeaderView,
        UserMineAccount,
        UserSelectView,
    },
};
</script>

<style lang="scss">
@import '../../style/UserViewStyle.scss';
</style>