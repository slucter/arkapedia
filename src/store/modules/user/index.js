import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default ({
  namespaced: true,
  state: {
<<<<<<< HEAD
    id: [],
    user: [],
    url: process.env.VUE_APP_BASE_URL,
=======
    products: [],
    // poso: localStorage.getItem('token') || null,
>>>>>>> ff5f33dd30b290ac879463636cba124635f97c6c
  },
  // getters: {
  //   getUser(state) {
  //     return state.poso !== null;
  //   },
  // },
  mutations: {
<<<<<<< HEAD
    userId(state) {
      state.id = localStorage.getItem('id');
    },
    user(state, data) {
      state.user = data;
      console.log(data);
    },
  },
  actions: {
    getUserId(context) {
      context.commit('userId');
    },
    getUserById(context) {
      axios
        .get(context.state.url + 'user/' + context.state.id) // eslint-disable-line
        .then((res) => {
          // console.log(res);
          context.commit('user', res.data.user);
        })
        .catch((err) => {
          console.log(err);
        });
    },
=======
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
>>>>>>> ff5f33dd30b290ac879463636cba124635f97c6c
  },
});
