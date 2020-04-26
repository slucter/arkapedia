<template>
<div>
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

export default {
  name: 'Home',
  components: {
    ButtonCategories,
    CardProductRow,
    CardCategories,
    SpecialCategory,
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
