import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import { getData } from '../api/home';

const store = createStore({
    state() {
        return {
            bannerNovels: [],
            kzjpNovels: [],
            djzpNovels: {},
            sszkNovels: {},
        };
    },

    getters: {

    },

    actions: {
        async fetchData({ commit }) {
            const { data } = await getData();
            commit('addHomeData', data);
        }
    },

    mutations: {
        addHomeData(state, data) {
            state.bannerNovels = data.bannerNovels;
            state.kzjpNovels = data.kzjpNovels;
            state.djzpNovels = data.djzpNovels;
            state.sszkNovels = data.sszkNovels;
        }
    },

    modules: {

    },

    plugins: [
        createPersistedState(),
    ]
});

export default store;