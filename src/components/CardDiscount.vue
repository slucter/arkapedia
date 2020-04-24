<template>
  <div class="card">
    <img :src="image" class="card-img-top" :alt="image">
    <div class="card-body">
      <p class="card-title">{{ name }}</p>
      <p class="discount">
        <span class="badge badge-secondary badge-danger">{{ discount }}</span>
        <span class="ori-price ml-2">{{ oriPrice }}</span>
      </p>
      <p class="card-price pt-1">{{ price }}</p>
      <div class="progress mt-1" style="height: 3px;">
        <div class="progress-bar bg-danger" role="progressbar" :style="width"
        aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <p class="available pt-1">Tersedia</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardDiscount',
  props: [
    'image',
    'name',
    'price',
    'width',
    'discount',
    'oriPrice',
  ],
};
</script>

<style scoped lang="scss">
  p{
    margin: 0 !important;
  }
  .card{
    width: 200px;
    height: 330px;
    margin: 0 8px 16px;
    border: none;
    box-shadow: 0 0 2px 2px rgba($color: #696969, $alpha: .5);
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
    text-transform: uppercase;
    height: 42px;
    overflow: hidden;
  }
  .card-price{
    font-size: 14px;
    font-weight: bold;
  }
  .location{
    font-size: 12px;
  }
  .rating{
    color: rgb(250, 191, 29);
    font-size: 12px;
  }
  .ori-price{
    text-decoration: line-through;
    font-size: 12px;
  }
  .available{
    font-size: 10px;
  }
</style>
