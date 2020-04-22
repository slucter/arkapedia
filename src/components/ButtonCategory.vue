<template>
  <button class="button-category">
    <div class="name-category">
      {{ name }}
    </div>
  </button>
</template>

<script>
export default {
  name: 'ButtonCategories',
  props: [
    'name',
  ],
};
</script>

<style scoped lang="scss">
  .button-category{
    margin-right: 10px;
    width: 216px;
    height: 64px;
    background: yellowgreen;
    border: none;
    border-radius: 8px;
    padding: 6px 8px;
    align-content: flex-start;
    display: flex;
    flex-direction: column;
  }
  .name-category{
    color: #ffffff;
    font-weight: 700;
  }
</style>
