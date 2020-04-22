<template>
  <div class="card-categories">
    <CardSearch />
    <CardSearch />
    <CardSearch />
    <CardSearch />
  </div>
</template>

<script>
import CardSearch from '@/components/CardSearch.vue';

export default {
  name: 'CardCategories',
  components: {
    CardSearch,
  },
};
</script>

<style lang="scss" scoped>
  .card-categories{
    max-width: 1200px;
    margin: 20px auto;
    overflow: hidden;
    display: flex;
  }
</style>
