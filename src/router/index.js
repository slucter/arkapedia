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
import history from '../views/history.vue';
import MyShop from '../views/OpenShop.vue';
// import store from '../store/modules/user/index';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    // meta: { requiresAuth: true },
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
    path: '/checkout',
    name: 'checkout',
    component: checkout,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    // meta: { requiresVisitor: true },
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
    path: '/history',
    name: 'history',
    component: history,
  },
  {
    path: '/my-shop',
    name: 'my-shop',
    component: MyShop,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     // this route requires auth, check if logged in
//     // if not, redirect to login page.
//     if (store.getters.getUser === null) {
//       next({
//         path: '/login',
//       });
//     } else {
//       next();
//     }
//   } else if (to.matched.some((record) => record.meta.requiresVisitor)) {
//     // this route requires auth, check if logged in
//     // if not, redirect to login page.
//     if (store.getters.getUser) {
//       next({
//         path: '/',
//       });
//     } else {
//       next();
//     }
//   } else {
//     next(); // make sure to always call next()!
//   }
// });

export default router;
