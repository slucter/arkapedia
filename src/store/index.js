import Vue from 'vue';
import Vuex from 'vuex';

import user from './modules/user';
import product from './modules/product';

Vue.use(Vuex);

export default new Vuex.Store({
<<<<<<< HEAD
=======
  state: {
    nama: 'shilfiya',
  },
>>>>>>> 90ae0d3edbae5e763f25d1c5c1e42893764b0c8b
  modules: {
    user,
    product,
  },
});
