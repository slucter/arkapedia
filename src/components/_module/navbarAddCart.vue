<template>
<div class="navbarCart">
  <div class="leftSide">
    <div class="imgLogo">
      <img src="https://ecs7.tokopedia.net/img/cache/215-square/shops-1/2019/8/5/6441653/6441653_e0be89bf-9e96-4045-a6af-b1f0fdfa572c.jpg" alt="">
    </div>
    <div class="storeName">
      <div class="storeDetail">
        <div class="storeStatus">
          <img src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/8b6c8c02.svg" alt="">
        </div>
        <div class="nameStore">
          <h5>HMNS Perfume</h5>
        </div>
        <div class="storeRank">
          <img src="https://ecs7.tokopedia.net/img/repsys/gold-3.gif" alt="">
        </div>
      </div>
      <div class="storeLocation">
        <div class="locationActive">
          <h5>Jakarta Pusat</h5>
        </div>
        <div class="timeActive">
          <h5>Aktif 9 jam yang lalu</h5>
        </div>
        <div class="lastReply">
          <h5>Dibalas ± sejam</h5>
        </div>
      </div>
    </div>
    <div class="buttonFollow">
      <button>Ikuti</button>
    </div>
  </div>
  <div class="rightSide">
    <div class="totalPrice">
      <div class="priceTotal">
        <h5>Total</h5>
      </div>
      <div class="priceValue">
        <h5>Rp86.000</h5>
      </div>
    </div>
    <div class="buttonLike">
      <button><img src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/834d60ca.svg" alt=""></button>
    </div>
    <div class="buttonOrder">
      <button>Pre-order</button>
    </div>
    <div class="buttonToCart">
      <button>Tambah Ke Keranjang</button>
    </div>
  </div>
  <div>

  </div>
</div>
</template>

<script>
export default {
  name: 'navbarAddCart',
};
</script>

<style scoped>
.navbarCart {
  width: 100%;
  height: 72px;
  background: white;
  z-index: 999;
  position: fixed;
  margin-top: 485px;
  padding: 8px 0px;
  display: flex;
  flex-direction: row;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  box-shadow: rgba(49, 53, 59, 0.16) 0px -2px 6px 0px;
}

.leftSide {
  display: flex;
  flex-direction: row;
  background: white;
  padding: 5px 0 5px 14px;
}

.imgLogo img {
  width: 38px;
  height: 38px;
  border-radius: 50%;
}

.storeName {
  background: white;
  width: 324px;
  height: 46px;
}

.storeDetail {
  display: flex;
  flex-direction: row;
  background: white;
}

.storeStatus img {
  height: 18px;
  width: 13px;
  background: white;
  margin: 0 0 0 15px;
}

.nameStore h5 {
  background: white;
  font-size: 14px;
  line-height: 19px;
  font-weight: 700;
  margin: 4.5px 0 0 5px;
  color: rgb(3, 172, 14);
}

.storeRank img {
  width: 42px;
  height: 17px;
  background: white;
  margin: 0 0 0 7px;
}

.storeLocation {
  display: flex;
  flex-direction: row;
  background: white;
}

.locationActive h5 {
  color: rgba(0, 0, 0, 0.54);
  font-size: 10px;
  line-height: 12px;
  margin: 0 0 0 15px;
}

.timeActive h5 {
  color: rgba(0, 0, 0, 0.54);
  font-size: 10px;
  line-height: 12px;
  margin: 0 0 0 7px;
}

.lastReply h5 {
  color: rgba(0, 0, 0, 0.54);
  font-size: 10px;
  line-height: 12px;
  margin: 0 0 0 7px;
}

.rightSide{
  display: flex;
  flex-direction: row;
  background: white;
  margin: 0 0 0 326px;
  padding: 0 0 0 40px;
}

.totalPrice {
  display: flex;
  flex-direction: column;
  margin: 5px 40px 5px 0;
  background: white;
}

.priceTotal h5 {
  font-size: 12px;
  font-weight: 700;
  color: rgba(49, 53, 59, 0.68);
  font-family: sans-serif;
}

.priceValue h5 {
  font-size: 16px;
  font-weight: 700;
  font-family: sans-serif;
}

.buttonLike button{
  width: 59px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid rgb(202, 203, 205);
  margin: 7px 15px 0 0;
  background: white;
}

.buttonToCart {
  margin: 0 0 0 12px;
}

.buttonToCart button {
  background: rgb(220, 78, 26);
  width: 182px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid rgb(220, 78, 26);
  color: white;
  font-size: 14px;
  font-weight: 800;
  letter-spacing: normal;
  margin: 7px 5px 0 0;
}

.buttonOrder button {
  background: white;
  width: 120px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid rgb(220, 78, 26);
  color: rgb(220, 78, 26);
  font-size: 14px;
  font-weight: 800;
  letter-spacing: normal;
  margin: 7px 5px 0 0;
}

.buttonFollow button {
  width: 60px;
  height: 40px;
  border-radius: 8px;
  background: rgb(3, 172, 14);
  border: 1px solid rgb(3, 172, 14);
  font-weight: 800;
  font-size: 14px;
  color: white;
  margin: 2px 0 0 25px;
}
</style>
