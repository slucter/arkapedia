<template>
  <div class="card">
    <img :src="image" class="card-img-top" :alt="image">
    <div class="card-body">
      <p class="card-title">{{ name }}</p>
      <p class="card-subtitle">{{ qty }} produk</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: [
    'image',
    'name',
    'qty',
  ],
};
</script>

<style scoped lang="scss">
  .card{
    width: 291.5px;
    height: 80px;
    margin: 0 4px;
    display: flex;
    flex-direction: row;
    padding: 8px;
    border-radius: 8px;
  }
  .card-img-top{
    width: 64px;
    height: 64px;
    background-color: #eaeaea;;
    margin-right: 8px;
  }
  .card-body{
    padding: 0;
  }
  .card-title{
    font-size: 14px;
    font-weight: 700;
    margin: 0;
    text-transform: uppercase;
  }
  .card-subtitle{
    font-size: 12px;
  }
</style>
