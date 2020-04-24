<template>
  <div class="card-product-row">
    <CardDiscount />
    <CardDiscount />
    <CardDiscount />
    <CardDiscount />
    <CardDiscount />
  </div>
</template>

<script>
import CardDiscount from '@/components/CardDiscount.vue';

export default {
  name: 'CardDiscountRow',
  components: {
    CardDiscount,
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
