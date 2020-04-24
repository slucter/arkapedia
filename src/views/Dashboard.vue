<template>
<div>
  <Navbar_ @Catclick3="ClickCategory" @CartClick3="ClickCart"/>
  <Submenu_ />
  <CartSubmenu_ />
  <div class="dashboard">
    <div class="special-categories">
      <SpecialCategory />
    </div>
    <ButtonCategories />
    <CardCategories />
    <CardProductRow />
  </div>
</div>
</template>

<script>
import ButtonCategories from '@/components/templates/ButtonCategories.vue';
import CardProductRow from '@/components/templates/CardProductRow.vue';
import CardCategories from '@/components/templates/CardCategories.vue';
import SpecialCategory from '@/components/SpecialCategory.vue';
import Navbar_ from '../components/Navbar/Navbar.vue';
import Submenu_ from '../components/Navbar/Submenu/Submenu.vue';
import CartSubmenu_ from '../components/Navbar/Submenu/CartSubmenu.vue';

export default {
  name: 'Home',
  components: {
    ButtonCategories,
    CardProductRow,
    CardCategories,
    SpecialCategory,
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
};
</script>

<style lang="scss" scoped>
  .dashboard{
    max-width: 1200px;
    margin: 50px auto;
  }
  .special-categories{
    padding: 0 5px;
  }
</style>
