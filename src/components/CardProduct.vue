<template>
  <router-link class="link" :to="id">
    <div class="card">
      <img :src="image" class="card-img-top" :alt="image">
      <div class="card-body">
        <p class="card-title">{{ name }}</p>
        <p class="card-price">Rp. {{ price }}</p>
        <div class="location">
          <p>{{ location }}</p>
        </div>
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
  name: 'CardProduct',
  props: [
    'name',
    'image',
    'price',
    'location',
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
    width: 200px;
    height: 330px;
    margin: 0 8px 16px;
  }
  .card-img-top{
    width: 200px;
    height: 200px;
    background: #eaeaea;
  }
  .card-body{
    padding: 8px;
  }
  .card-title{
    font-size: 14px;
    font-weight: bold;
    margin: 0;
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
