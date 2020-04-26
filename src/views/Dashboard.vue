<template>
<<<<<<< HEAD
<div>
  <div class="dashboard">
    <div class="special-categories">
      <SpecialCategory />
=======
  <div>
    <Navbar_ @Catclick3="ClickCategory" @CartClick3="ClickCart"/>
    <Submenu_ />
    <CartSubmenu_ />
    <div class="dashboard">
      <div class="container row">
        <Navbar_ />
        <div class="col-md-3">
          <SideInfo />
        </div>
        <div class="col-md-9">
          <div class="carousel">
            <Carousel />
          </div>
          <div class="special-categories">
            <SpecialCategory />
          </div>
          <CardDiscountRow />
          <ButtonCategories />
          <div class="card-categories">
            <h2>Paling Banyak Dicari</h2>
            <CardCategories />
          </div>
          <PromoRow />
          <CardProductRow />
      </div>
      </div>
>>>>>>> 35f4913b24c297c53b3fb69b34cc3c26c1b5234f
    </div>
    <Footer />
  </div>
</template>

<script>
import SideInfo from '@/components/templates/SideInfo.vue';
import ButtonCategories from '@/components/templates/ButtonCategories.vue';
import CardProductRow from '@/components/templates/CardProductRow.vue';
import CardCategories from '@/components/templates/CardCategories.vue';
import SpecialCategory from '@/components/SpecialCategory.vue';
<<<<<<< HEAD
=======
import Carousel from '@/components/Carousel.vue';
import CardDiscountRow from '@/components/templates/CardDiscountRow.vue';
import PromoRow from '../components/templates/PromoRow.vue';
import Footer from '../components/small/footer.vue';
import Navbar_ from '../components/Navbar/Navbar.vue';
import Submenu_ from '../components/Navbar/Submenu/Submenu.vue';
import CartSubmenu_ from '../components/Navbar/Submenu/CartSubmenu.vue';
>>>>>>> 35f4913b24c297c53b3fb69b34cc3c26c1b5234f

export default {
  name: 'Home',
  components: {
    ButtonCategories,
    CardProductRow,
    CardCategories,
    SpecialCategory,
<<<<<<< HEAD
=======
    Navbar_,
    Carousel,
    CardDiscountRow,
    PromoRow,
    Footer,
    Submenu_,
    SideInfo,
    CartSubmenu_,
  },
  methods: {
    ClickCategory() {
      const submenu = document.querySelector('.submenu-category');
      submenu.classList.toggle('subcat-show');
    },

    ClickCart() {
      console.log('hello');
      const subCartLayer = document.querySelector('.submenu-icon-group');
      subCartLayer.classList.toggle('submenuCartShow');
      const cartIcon = document.querySelector('.submenu-cart-icon');
      cartIcon.classList.toggle('SubCartTop');
    },
>>>>>>> 35f4913b24c297c53b3fb69b34cc3c26c1b5234f
  },
};
</script>

<style lang="scss" scoped>
  .dashboard{
    margin: 50px auto;
  }
  .container{
    padding-top: 100px;
    margin: 0 auto;
  }
  .special-categories, .carousel{
    padding: 0 5px;
    margin-bottom: 32px;
  }
  .card-categories h2{
    padding: 0 5px;
    font-weight: 700;
    font-size: 20px;
  }
</style>
