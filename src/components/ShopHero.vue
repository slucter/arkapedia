<template>
  <div class="shop-hero">
    <div class="img-hero"></div>
    <div class="shop-desc">
      <div class="col-md-6 shop-profile">
        <div class="seller-img"></div>
        <div class="seller-profile">
          <h3>Lock & Lock Official</h3>
          <div class="location">
            <p>Kab. Bekasi</p>
          </div>
          <div class="button-hero">
            <button class="btn btn-sm btn-success">Satu</button>
            <button class="btn btn-sm btn-success">Dua</button>
            <button class="btn btn-sm btn-light">Tiga</button>
            <button class="icon">
              <i class="fas fa-clipboard-list"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="col-md-6 shop-detail">
        <div class="seller-info">
          <p>Produk Terjual</p>
          <p>54,9K</p>
        </div>
        <div class="seller-profile">
          <p>Nilai Kualitas Produk</p>
          <div class="rating">
            <p>4.7</p>
            <div class="rating-icon">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
          </div>
          <div class="statistic text-success">
            <p>Lihat Statistik Toko</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopHero',
};
</script>

<style scoped lang="scss">
  .shop-hero{
    height: 430px;
    width: 100%;
    margin-bottom: 4em;
  }
  .img-hero{
    border-radius: 1em 1em 0 0;
    background-image: url('https://ecs7.tokopedia.net/img/cache/1190/attachment/2020/1/8/18988007/18988007_707e7a64-40bb-4d6f-a7de-c9a9d3d4bda1.jpg');
    height: 290px;
    width: 100%;
  }
  .shop-desc{
    // position: absolute;
    background-color: #eaeaea;
    width: 100%;
    padding: 10px 0;
    border-radius: 0 0 1em 1em;
    display: flex;
  }
  .shop-profile, .shop-detail{
    display: flex;
    padding: 10px 20px;
  }
  .shop-profile{
    border-right: 1px solid #696969;
  }
  .seller-img{
    width: 100px;
    height: 100px;
    margin-right: 16px;
    border-radius: 50%;
    padding-bottom: 50px;
  }
  .btn-sm{
    margin-right: 1em;
    padding: 3px 20px;
    font-weight: 600;
  }
  .icon{
    padding: 1px 10px;
    background: transparent;
    border: 1px solid #696969;
    border-radius: 3px;
  }
  .rating{
    font-size: 25px;
    font-weight: 700;
    display: flex;
  }
  .rating p{
    margin-right: 16px;
  }
  .rating-icon{
    color: rgb(250, 191, 29);
  }
  .statistic{
    cursor: pointer;
    font-size: 10px;
    font-weight: 700;
  }
  .seller-info{
    margin-right: 50px;
  }
  .seller-info p:nth-child(1){
    margin-bottom: 0;
  }
  .seller-info p:nth-child(2){
    font-size: 30px;
    font-weight: 700;
  }
</style>
