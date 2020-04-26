import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import user from './modules/user';
import product from './modules/product';

Vue.use(Vuex);

// eslint-disable-next-line import/prefer-default-export
export const store = new Vuex.Store({
  state: {
    productId: null,
  },
  mutations: {
    product(state, data) {
      state.product = data;
    },
  },
  actions: {
    getProductById(context, data) {
      // eslint-disable-next-line prefer-template
      axios.get('http://192.168.1.97:5000/api/arkapedia/product/:id' + data)
        .then((res) => {
          context.commit('productId', res.data.result);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  modules: {
    user,
    product,
  },
});
