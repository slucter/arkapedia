import Vue from 'vue';
import Vuex from 'vuex';

import user from './modules/user';
import product from './modules/product';
import shop from './modules/shop';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nama: 'shilfiya',
  },
  modules: {
    user,
    product,
    shop,
  },
});
