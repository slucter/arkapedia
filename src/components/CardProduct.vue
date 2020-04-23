<template>
  <div class="card">
    <img src="" class="card-img-top" alt="">
    <div class="card-body">
      <p class="card-title">Card title Card title Card title Card title</p>
      <p class="card-price">Rp. 80.000</p>
      <div class="location">
        <p>Kota Administrasi</p>
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
</template>

<script>
export default {
  name: 'CardProduct',
};
</script>

<style scoped lang="scss">
  .card{
    width: 222.5px;
    height: 356.5px;
    margin: 0 8px 16px;
  }
  .card-img-top{
    width: 222.5px;
    height: 222.5px;
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
