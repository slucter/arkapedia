<template>
  <div class="shop">
    <Navbar_ />
    <div class="container">
      <ShopHero />
      <div class="row mt-3">
        <div class="col-md-3 side-info">
          <SideInfo />
        </div>
        <div class="col-md-9 shop-etalase">
          <div class="all-products">
            <CardProduct name="Hallo" price="World" />
            <CardProduct name="Hallo" price="World" />
            <CardProduct name="Hallo" price="World" />
            <CardProduct name="Hallo" price="World" />
            <CardProduct name="Hallo" price="World" />
            <CardProduct name="Hallo" price="World" />
            <CardProduct name="Hallo" price="World" />
            <CardProduct name="Hallo" price="World" />
            <CardProduct name="Hallo" price="World" />
            <CardProduct name="Hallo" price="World" />
            <CardProduct name="Hallo" price="World" />
            <CardProduct name="Hallo" price="World" />
            <CardProduct name="Hallo" price="World" />
            <CardProduct name="Hallo" price="World" />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import CardProduct from '@/components/CardShop.vue';
import ShopHero from '@/components/ShopHero.vue';
import SideInfo from '@/components/templates/SideInfo.vue';
import Navbar_ from '../components/Navbar/Navbar.vue';
import Footer from '../components/footer.vue';

export default {
  name: 'Home',
  components: {
    Navbar_,
    ShopHero,
    SideInfo,
    CardProduct,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
  .shop{
    padding-top: 130px;
  }
  .all-products{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .shop-etalase{
    padding: 0;
  }
</style>
