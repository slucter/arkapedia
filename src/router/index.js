import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import Profile from '../views/profile.vue';
import editProfile from '../views/editProfile.vue';
import addProduct from '../views/addProduct.vue';
import profileStore from '../views/profileStore.vue';
import Detail from '../view/detail.vue';
import Cart from '../views/Cart.vue';
import Login from '../views/login.vue';
import Shop from '../views/Shop.vue';
import Register from '../views/register.vue';
<<<<<<< HEAD
import Shipment from '../views/ShipAndPay.vue';
=======
import history from '../views/history.vue';
>>>>>>> 35f4913b24c297c53b3fb69b34cc3c26c1b5234f

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
    path: '/profileStore/:id/addProduct',
    name: 'addProduct',
    component: addProduct,
  },
  {
    path: '/profileStore/:id',
    name: 'profileStore',
    component: profileStore,
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail,
  },
  {
    path: '/Cart',
    name: 'Cart',
    component: Cart,
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
  {
<<<<<<< HEAD
    path: '/shipment',
    name: 'shipment',
    component: Shipment,
=======
    path: '/history',
    name: 'history',
    component: history,
>>>>>>> 35f4913b24c297c53b3fb69b34cc3c26c1b5234f
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
