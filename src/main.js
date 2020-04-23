import Vue from 'vue';
import App from './App.vue';
<<<<<<< HEAD
import './registerServiceWorker';
import router from './router/index';
import store from './store';
=======
import router from './router/index';
import { store } from './store/index';
>>>>>>> c993a51fbbd02745d38c34079288a54d37d68755

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
