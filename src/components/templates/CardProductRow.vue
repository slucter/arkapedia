<template>
  <div class="card-product-row">
    <div class="before-login" v-if="!id">
      <CardProduct v-for="data in products" :key="data.id"
      :name="data.name" :price="data.price" :image="data.image.image1"
      :location="data.shop.location" :id="`detail/${data.id}`" />
    </div>
    <div class="after-login" v-else>
      <CardProductLogin v-for="data in products" :key="data.id"
      :name="data.name" :price="data.price" :image="data.image.image1"
      :location="data.shop.location" :id="`detail/${data.id}`" />
    </div>
  </div>
</template>

<script>
import CardProduct from '@/components/CardProduct.vue';
import CardProductLogin from '@/components/CardProductLogin.vue';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'CardProductRow',
  components: {
    CardProduct,
    CardProductLogin,
  },
  data() {
    return {
      id: null,
    };
  },
  created() {
    this.id = localStorage.getItem('id');
  },
  methods: {
    ...mapActions('product', ['getAllProducts']),
  },
  mounted() {
    this.getAllProducts();
  },
  computed: {
    ...mapState('product', ['products']),
  },
};
</script>

<style lang="scss" scoped>
  .card-product-row .before-login, .card-product-row .after-login{
    display: flex;
    flex-wrap: wrap;
    margin: 20px auto;
    justify-content: center;
    width: 100% !important;
  }
</style>
