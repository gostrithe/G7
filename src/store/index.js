import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

const store = createStore({
    state() {
        return {
            bannerNovels: [],
            kzjpNovels: [],
            djzpNovels: {},
            sszkNovels: {},
        }
    },

    getters: {

    },

    actions: {

    },

    mutations: {

    },

    modules: {

    },

    plugins: [
        createPersistedState(),
    ]
})