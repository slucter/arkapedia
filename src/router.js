import Vue from 'vue';
import VueRouter from 'vue-router';
import { store } from './store/index';
import Detail from './view/detail.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/detail',
    name: 'Detail',
    component: Detail,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
  store,
});
export default router;
