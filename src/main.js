import Vue from 'vue';
import vuelidate from 'vuelidate';
import App from './App.vue';
import router from './router/index';
import store from './store/index';

Vue.use(vuelidate);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
