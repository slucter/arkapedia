<template>
<div class="productBody">
  <div class="storeRating">
    <h6> <img src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/558082c4.svg" alt=""> Power Merchant</h6>
  </div>

  <!-- Name Product -->
  <div class="productName">
    <h6>Starter Pack HMNS Perfume isi 3 Varian Parfum (@5ml)</h6>
  </div>

  <!-- Rating Product -->
  <div class="productRating">
    <div class="productRate">
      <h6>4.8 <img src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/4ed9ea8f.svg" alt=""> (1367)</h6>
    </div>
    <div class="productSale">
      <h6>Terjual 3968 Produk (100%)</h6>
    </div>
    <div class="productSee">
      <h6>65812x Dilihat</h6>
    </div>
  </div>

  <!-- Price Product-->
  <div class="productPrice">
    <div class="price">
      <h3>HARGA</h3>
    </div>
    <div class="valuePrice">
      <h3>Rp 86.000</h3>
    </div>
  </div>

  <!-- Total Product -->
  <div class="productTotal">
    <div class="totalProduct">
      <h3>JUMLAH</h3>
    </div>
    <div class="productStatus">
      <div class="statusProduct">
        <h3>Stok Tersedia</h3>
      </div>
      <div class="pcsProduct">
        <h3>Min. pembelian 1pcs.</h3>
      </div>
      <div class="noteProduct">
        <h3>Tulis catatan untuk penjual</h3>
      </div>
    </div>
  </div>

  <!-- Info Product -->
  <div class="productInfo">
    <div class="infoProduct">
      <h3>INFO PRODUK</h3>
    </div>
    <div class="productSpecific">
      <div class="timeProduct">
        <div class="productType">
          <h3>Waktu preorder</h3>
        </div>
        <div class="productCondition">
          <h3>30 Hari</h3>
        </div>
      </div>
      <div class="weightProduct">
        <div class="productType">
          <h3>Berat</h3>
        </div>
        <div class="productCondition">
          <h3>300gr</h3>
        </div>
      </div>
      <div class="conditionProduct">
        <div class="productType">
          <h3>Kondisi</h3>
        </div>
        <div class="productCondition">
          <h3>Baru</h3>
        </div>
      </div>
      <div class="insuranceProduct">
        <div class="productType">
          <h3>Asuransi</h3>
        </div>
        <div class="productCondition">
          <h3>Ya</h3>
        </div>
      </div>
      <div class="storefrontProduct">
        <div class="productType">
          <h3>Etalase</h3>
        </div>
        <div class="productCondition">
          <h3>Parfum</h3>
        </div>
      </div>
    </div>
  </div>

  <!-- Shipping -->
  <div class="productShipping">
    <div class="shippingProduct">
      <h3>ONGKOS KIRIM</h3>
    </div>
    <div class="shippingPlace">
      <h3>Ke Jakarta Barat, Cengkareng</h3>
    </div>
    <div class="shippingStart">
      <h3>Mulai dari Rp9.000</h3>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'detailProduct',
};
</script>

<style scoped>
.productBody {
  background: white;
  width: 100%;
  width: 754px;
  height: 580px;
}

.storeRating {
  background: white;
  height: 18px;
  margin: 0px 0px 12px;
}

.storeRating h6 {
  height: 16px;
  color: rgb(3, 172, 14);
  line-height: 18px;
  font-size: 12px;
  font-weight: 700;
  margin: 0px 8px 0px 0px;
  font-family: sans-serif;
}

.storeRating img {
  height: 16px;
  width: 16px;
}

.productName {
  background: white;
  margin: 12px 0px;
}

.productName h6 {
  font-size: 17.5px;
  line-height: 1.3;
  color: rgba(49, 53, 59, 0.96);
  font-weight: 800;
  position: relative;
}

.productRating {
  background: white;
  display: flex;
  flex-direction: row;
  margin: 0px 0px 4px;
}

.productRate h6 {
  font-size: 14px;
  background: white;
}

.productRate img {
  width: 14px;
  height: 14px;
}

.productSale h6 {
  background: white;
  margin: 0px 20px;
  font-weight: bolder;
  font-size: 14px;
}

.productSee h6 {
  font-size: 14px;
  background: white;
}

.productPrice {
  background: white;
  display: flex;
  flex-direction: row;
  padding: 20px 0px;
}

.price {
  background: white;
}

.price h3 {
  font-size: 12px;
  line-height: 18px;
  color: rgba(49, 53, 59, 0.32);
  font-weight: 700;
}

.valuePrice {
  background: white;
  margin: 0 0 0 20px;
}
.valuePrice h3 {
  line-height: 30px;
  font-size: 24px;
  color: rgb(250, 89, 29);
  font-weight: bold;
}

.productTotal {
  display: flex;
  flex-direction: row;
  background: turquoise;
  padding: 20px 0;
}

.totalProduct h3 {
  font-size: 12px;
  line-height: 18px;
  color: rgba(49, 53, 59, 0.32);
  font-weight: 700;
}

.productSpecific {
  display: flex;
  flex-direction: row;
  margin: 0 0 0 12px;
}

.productStatus {
  background: whitesmoke;
  margin: 0 0 0 14px;
}

.statusProduct h3 {
  font-size: 12px;
  background: white;
}

.pcsProduct h3 {
  font-size: 12px;
}

.noteProduct h3 {
  font-size: 12px;
  color: rgb(66, 181, 73);
  font-weight: bolder;
}

.productInfo {
  display: flex;
  flex-direction: row;
  background: white;
  padding: 20px 0;
}

.infoProduct h3 {
  background: whitesmoke;
  font-size: 12px;
  width: 50px;
  line-height: 18px;
  color: rgba(49, 53, 59, 0.32);
  font-weight: 700;
}

.productType h3 {
  line-height: 18px;
  color: rgba(49, 53, 59, 0.68);
  text-transform: capitalize;
  font-weight: 400;
  font-size: 12px;
}

.productCondition h3 {
  line-height: 20px;
  color: rgba(49, 53, 59, 0.96);
  text-transform: capitalize;
  font-size: 14px;
  font-weight: 700px;
}

.timeProduct {
  background: white;
  padding: 0 16px 0 0;
}

.weightProduct {
  background: white;
  padding: 0 16px;
}

.conditionProduct {
  background: white;
  padding: 0 16px;
}

.insuranceProduct {
  background: white;
  padding: 0 16px;
}

.storefrontProduct {
  background: white;
  padding: 0 16px;
}

.productShipping {
  display: flex;
  flex-direction: row;
  background: royalblue;
  padding: 20px 0;
}

.shippingProduct h3 {
  background: whitesmoke;
  font-size: 12px;
  width: 50px;
  line-height: 18px;
  color: rgba(49, 53, 59, 0.32);
  font-weight: 700;
}

.shippingPlace {
  padding: 0 0 0 12px;
}

.shippingPlace h3 {
  background: saddlebrown;
  color: rgba(0,0,0,.54);
  font-size: 12px;
}

.shippingStart {
  padding: 0 0 0 350px;
}

.shippingStart h3 {
  color: rgba(0,0,0,.54);
  background: silver;
  font-size: 12px;
}
</style>
