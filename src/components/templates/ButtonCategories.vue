<template>
  <div class="button-categories">
    <ButtonCategory name="For You" />
    <ButtonCategory name="Special Discount" />
    <ButtonCategory name="Makanan Jadi" />
    <ButtonCategory name="Aksesoris Motor" />
    <ButtonCategory name="Makanan & Susu Bayi" />
  </div>
</template>

<script>
import ButtonCategory from '@/components/ButtonCategory.vue';

export default {
  name: 'ButtonCategories',
  components: {
    ButtonCategory,
  },
};
</script>

<style lang="scss" scoped>
  .button-categories{
    overflow: hidden;
    position: sticky;
    margin: 20px auto;
    top: 0;
    overflow: hidden;
    display: flex;
    z-index: 99;
    padding: 0 5px;
  }
</style>
