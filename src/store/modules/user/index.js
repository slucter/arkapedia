import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    // poso: localStorage.getItem('token') || null,
  },
  // getters: {
  //   getUser(state) {
  //     return state.poso !== null;
  //   },
  // },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
