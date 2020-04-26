<template>
  <router-link class="link" to="detail/1">
    <div class="card">
      <img src="https://ecs7.tokopedia.net/img/cache/700/product-1/2018/8/15/18988007/18988007_0ea97510-9ae3-4592-a981-a00f91054240.jpg" class="card-img-top" alt="img-shop">
      <div class="card-body">
        <p class="card-title">Hello</p>
        <p class="card-price">Rp. 50000</p>
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
