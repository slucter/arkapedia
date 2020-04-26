<template>
  <router-link class="link" :to="id">
    <div class="card">
      <img :src="image" class="card-img-top" :alt="image">
      <div class="card-body">
        <p class="card-title">{{ name }}</p>
        <p class="card-price">Rp. {{ price }}</p>
        <div class="rating">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'CardShop',
  props: [
    'name',
    'image',
    'price',
    'id',
  ],
};
</script>

<style scoped lang="scss">
  .link{
    color: inherit;
    text-decoration: none;
  }
  p{
    margin: 0 !important;
  }
  .card{
    width: 160px;
    height: 290px;
    margin: 0 3px 8px;
    border: none;
    box-shadow: 0 0 3px 2px rgba($color: #eaeaea, $alpha: 0.8);
  }
  .card-img-top{
    width: 160px;
    height: 160px;
    background: #eaeaea;
  }
  .card-body{
    padding: 8px;
  }
  .card-title{
    font-size: 14px;
    font-weight: bold;
    margin: 0;
    text-transform: uppercase;
    max-height: 45px;
    overflow: hidden;
  }
  .card-price{
    font-size: 14px;
    font-weight: bold;
    color: rgb(250, 89, 29);
  }
  .location{
    font-size: 12px;
  }
  .rating{
    color: rgb(250, 191, 29);
    font-size: 12px;
  }
</style>
