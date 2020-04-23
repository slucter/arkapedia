import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import Profile from '../views/profile.vue';
import editProfile from '../views/editProfile.vue';
import addProduct from '../views/addProduct.vue';
<<<<<<< HEAD
=======
import Detail from '../view/detail.vue';
>>>>>>> c993a51fbbd02745d38c34079288a54d37d68755

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
<<<<<<< HEAD
=======
  {
    path: '/detail',
    name: 'Detail',
    component: Detail,
  },
>>>>>>> c993a51fbbd02745d38c34079288a54d37d68755
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
