import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default ({
  namespaced: true,
  state: {
    id: [],
    user: [],
    url: process.env.VUE_APP_BASE_URL,
  },
  mutations: {
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
  },
});
