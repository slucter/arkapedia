import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default ({
  namespaced: true,
  state: {
    seller: [],
    shopProducts: [],
    url: process.env.VUE_APP_BASE_URL,
  },
  mutations: {
    shop(state, data) {
      state.shopProducts = data;
      console.log(data);
    },
    seller(state, data) {
      state.seller = data;
      console.log(data);
    },
  },
  actions: {
    getAllProductsByShopId(context, id) {
      axios
        .get(context.state.url + 'product/shop/' + id) // eslint-disable-line
        .then((res) => {
          context.commit('shop', res.data.product.rows);
          // console.log(res.data.product.rows);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getSeller(context, id) {
      axios
        .get(context.state.url + 'shop/' + id) // eslint-disable-line
        .then((res) => {
          context.commit('seller', res.data);
          // console.log(res.data.product.rows);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {
  },
});
