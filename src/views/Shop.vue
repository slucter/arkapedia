<template>
  <div class="shop">
    <div class="container">
      <ShopHero v-for="shop in seller" :key="shop.id"
      :name="shop.name" :location="shop.location" />
      <div class="col-md-12 shop-etalase">
        <div class="all-products">
          <CardShop v-for="data in shopProducts" :key="data.id" :name="data.name"
          :price="data.price" :image="data.image.image1"
          :id="`detail/${data.id}`" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import CardShop from '@/components/CardShop.vue';
import ShopHero from '@/components/ShopHero.vue';
// import Navbar_ from '../components/Navbar/Navbar.vue';
import Footer from '../components/footer.vue';

export default {
  name: 'Home',
  components: {
    // Navbar_,
    ShopHero,
    CardShop,
    Footer,
  },
  methods: {
    ...mapActions('shop', ['getAllProductsByShopId']),
    ...mapActions('shop', ['getSeller']),
  },
  mounted() {
    this.getAllProductsByShopId(this.$route.params.id);
    this.getSeller(this.$route.params.id);
  },
  computed: {
    ...mapState('shop', ['shopProducts']),
    ...mapState('shop', ['seller']),
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
