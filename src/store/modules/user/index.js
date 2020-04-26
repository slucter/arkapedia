import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

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
    FOR_USER(state, data) {
      state.forUser = data;
    },
  },
  actions: {
    getUserById(context) {
      axios.get(`${context.state.url} user/${localStorage.id}`)
      // eslint-disable-next-line no-unused-vars
        .then((res) => {
        // eslint-disable-next-line no-unused-expressions
          context.commit('FOR_USER', res.data);
          console.log(res);
        });
    },
  },
  modules: {
  },
});
