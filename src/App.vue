<template>
<div>
  <div class="navbar" v-if="items">
  <Navbar_ @Catclick3="ClickCategory" @CartClick3="ClickCart"/>
    <Submenu_ />
    <CartSubmenu_ />
  </div>
<router-view></router-view>
</div>
</template>

<script>
import Navbar_ from './components/Navbar/Navbar.vue';
import Submenu_ from './components/Navbar/Submenu/Submenu.vue';
import CartSubmenu_ from './components/Navbar/Submenu/CartSubmenu.vue';

export default {
  name: 'App',
  data() {
    return {
      items: [],
    };
  },
  components: {
    Navbar_,
    Submenu_,
    CartSubmenu_,
  },
  methods: {
    ClickCategory() {
      const submenu = document.querySelector('.submenu-category');
      submenu.classList.toggle('subcat-show');
    },

    ClickCart() {
      const subCartLayer = document.querySelector('.submenu-icon-group');
      subCartLayer.classList.toggle('submenuCartShow');
      const cartIcon = document.querySelector('.submenu-cart-icon');
      cartIcon.classList.toggle('SubCartTop');
    },
  },

  created() {
    this.items = localStorage.getItem('items');
  },

};
</script>

<style>

</style>
