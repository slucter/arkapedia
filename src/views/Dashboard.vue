<template>
  <div class="dashboard">
    <div class="container">
    <Navbar_ />
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
    <Footer />
  </div>
</template>

<script>
import ButtonCategories from '@/components/templates/ButtonCategories.vue';
import CardProductRow from '@/components/templates/CardProductRow.vue';
import CardCategories from '@/components/templates/CardCategories.vue';
import SpecialCategory from '@/components/SpecialCategory.vue';
import Carousel from '@/components/Carousel.vue';
import CardDiscountRow from '@/components/templates/CardDiscountRow.vue';
import PromoRow from '../components/templates/PromoRow.vue';
import Footer from '../components/footer.vue';
import Navbar_ from '../components/Navbar/Navbar.vue';

export default {
  name: 'Home',
  components: {
    ButtonCategories,
    CardProductRow,
    CardCategories,
    SpecialCategory,
    Navbar_,
    Carousel,
    CardDiscountRow,
    PromoRow,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
  .dashboard{
    margin: 50px auto;
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
