import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import user from './modules/user';
import product from './modules/product';
import shop from './modules/shop';

Vue.use(Vuex);

// eslint-disable-next-line import/prefer-default-export
export default new Vuex.Store({
  state: {
    productId: null,
  },
  mutations: {
    productId(state, data) {
      state.productId = data;
    },
  },
  actions: {
    getProductById(context) {
      // eslint-disable-next-line prefer-template
      axios.get('http://192.168.1.97:5000/api/arkapedia/product/:id')
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
    shop,
  },
});
