<template>
  <div class="card-product-row">
    <CardProduct />
    <CardProduct />
    <CardProduct />
    <CardProduct />
    <CardProduct />
    <CardProduct />
    <CardProduct />
    <CardProduct />
    <CardProduct />
    <CardProduct />
  </div>
</template>

<script>
import CardProduct from '@/components/CardProduct.vue';

export default {
  name: 'CardProductRow',
  components: {
    CardProduct,
  },
};
</script>

<style lang="scss" scoped>
  .card-product-row{
    display: flex;
    flex-wrap: wrap;
    margin: 20px auto;
    justify-content: center;
    width: 100% !important;
  }
</style>
