<template>
<div class="containerCardProduct">
  <div class="titleCardProduct">
    <h1>Lainnya di toko ini</h1>
  </div>
  <div class="containerHeaderCard">
    <div class="headerCardProduct" v-for="card in 6" :key="card">
      <div class="imgCardProduct">
        <img src="https://ecs7.tokopedia.net/img/cache/200-square/product-1/2019/10/23/71327545/71327545_f779ebb6-2f72-4219-a9ef-0aee4b41f546_853_853.webp" alt="">
      </div>
      <div class="bodyCardProduct">
        <div class="nameCardProduct">
          <h5>HMNS Perfume - Delta 50ml</h5>
        </div>
        <div class="priceCardProduct">
          <p>Rp 205.000</p>
        </div>
        <div class="placeCardProduct">
          <p><img src="https://ecs7.tokopedia.net/img/power_merchant_badge.png" alt=""> Kota Administrasi Jakarta</p>
        </div>
        <div class="headerRatingProduct">
          <div class="ratingCardProduct" v-for="star in 5" :key="star">
            <img src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/4fede911.svg" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'anotherProduct',
};
</script>

<style scoped>
.containerCardProduct {
  background: white;
  display: flex;
  flex-direction: column;
  margin: 0 24px;
  border-top: 1px solid lightgray;
}

.containerHeaderCard {
  display: flex;
  flex-direction: row;
}

.titleCardProduct h1 {
  font-weight: 800;
  font-size: 16px;
  line-height: 20px;
  margin: 24px 0 32px;
}

.headerCardProduct {
  background: white;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  margin: 0 16.5px 32px 0;
  height: 364px;
  width: 203px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1)
}

.imgCardProduct img {
  width: 203px;
  height: 184px;
  object-fit: cover;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}

.bodyCardProduct {
  padding: 8px;
}

.nameCardProduct h5 {
  font-size: 14px;
  margin: 0px;
  height: 37px;
  font-weight: 600;
}

.priceCardProduct p {
  font-size: 14px;
  margin: 0px;
  height: 21px;
  font-weight: bold;
  color: rgb(250, 89, 29);
}

.placeCardProduct p {
  font-size: 12px;
  font-weight: 500;
  margin: 7px 0 0 0;
  line-height: 20px;
}

.placeCardProduct img {
  width: 16px;
  height: 16px;
  margin: 0 0 5px 0;
}

.headerRatingProduct {
  display: flex;
  flex-direction: row;
}
</style>
