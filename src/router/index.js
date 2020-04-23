import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import Profile from '../views/profile.vue';
import editProfile from '../views/editProfile.vue';
import addProduct from '../views/addProduct.vue';
<<<<<<< HEAD
import Detail from '../view/detail.vue';
=======
import checkout from '../views/checkout.vue';
import Login from '../views/login.vue';
>>>>>>> a9ac4aa4e2ef70c1e3aa7066c94b33c01b0e0533

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
<<<<<<< HEAD
    path: '/detail',
    name: 'Detail',
    component: Detail,
=======
    path: '/checkout',
    name: 'checkout',
    component: checkout,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
>>>>>>> a9ac4aa4e2ef70c1e3aa7066c94b33c01b0e0533
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
