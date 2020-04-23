import vue from 'vue';
import VueRouter from 'vue-router';
import Profile from './views/profile.vue'
import editProfile from './views/editProfile.vue'
import addProduct from './views/addProduct.vue'
vue.use(VueRouter);

const routes = [
    {
      path: '/',
      name: 'profile',
      component: Profile,
    },
    {
        path: '/edit',
        name: 'editProfile',
        component: editProfile  
    },
    {
      path: '/add',
      name: 'addProduct',
      component: addProduct  
  }
  ];
  const router = new VueRouter({
    mode: 'history',
    routes
  });
  export default router