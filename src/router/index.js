import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import Profile from '../views/profile.vue';
import editProfile from '../views/editProfile.vue';
import addProduct from '../views/addProduct.vue';
import profileStore from '../views/profileStore.vue';
import Detail from '../view/detail.vue';
import checkout from '../views/checkout.vue';
import Login from '../views/login.vue';
import Shop from '../views/Shop.vue';
import Register from '../views/register.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
  },
  {
    path: '/edit',
    name: 'editProfile',
    component: editProfile,
  },
  {
    path: '/add',
    name: 'addProduct',
    component: addProduct,
  },
  {
    path: '/profileStore',
    name: 'profileStore',
    component: profileStore,
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail,
  },
  {
    path: '/shop/detail/:id',
    name: 'Detail',
    component: Detail,
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: checkout,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/shop/:id',
    name: 'Shop',
    component: Shop,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
