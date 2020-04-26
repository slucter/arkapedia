import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default ({
  namespaced: true,
  state: {
    products: [],
    url: process.env.VUE_APP_BASE_URL,
  },
  mutations: {
    product(state, data) {
      state.products = data;
      console.log(data);
    },
  },
  actions: {
    getAllProducts(context) {
      // console.log(context.state.url);
      axios
        .get(context.state.url + 'product') // eslint-disable-line
        .then((res) => {
          context.commit('product', res.data.Products.rows);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {
  },
});
