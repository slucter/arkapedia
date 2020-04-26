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
<<<<<<< HEAD
    overflow: hidden;
    position: sticky;
=======
>>>>>>> 35f4913b24c297c53b3fb69b34cc3c26c1b5234f
    margin: 20px auto;
    top: 0;
    overflow: hidden;
    display: flex;
    z-index: 99;
    padding: 0 5px;
  }
</style>
