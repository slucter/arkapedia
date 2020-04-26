<template>
<div>
  <div class="headerDescription">
    <div class="titleDescription">
      <h5>Deskripsi {{ name }} </h5>
    </div>
    <div class="bodyDescription">
      <p> {{ description }}
      </p>
    </div>
  </div>

  <!-- <div class="noteStore">
    <div class="storeNote">
      <h3>CATATAN TOKO</h3>
    </div>
    <div class="storeNoteChild">
      <div class="storeNoteSend">
        <h3>Pengiriman</h3>
      </div>
      <div class="storeNoteContent">
        <p>STARTER PACK
        Pengiriman dilakukan seminggu sekali setiap hari senin dan selasa</p>
      </div>
      <div class="storeNoteTime">
        <div class="noteTime">
          <p>23 Aug 2019 17:40 WIB</p>
        </div>
        <div class="noteFull">
          <p>Selengkapnya</p>
        </div>
      </div>
    </div>
  </div> -->

  <div class="reviewHeader">
    <div class="reviewTotal">
      <h3>ULASAN (1369)</h3>
    </div>
    <div class="reviewContent">
      <h5> {{ name }} </h5>
    </div>
  </div>

  <div class="ratingHeader">
    <div class="ratingBody">
      <div class="ratingValue">
        <h1>4.9<span> /5</span></h1>
      </div>
      <div class="starRating">
        <div class="ratingStar" v-for="star in 5" :key="star">
          <img src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/4ed9ea8f.svg" alt="">
        </div>
      </div>
      <div class="ratingReview">
        <h6>(1369) Ulasan</h6>
      </div>
    </div>
    <!-- <div>
      <h1>rating</h1>
    </div> -->
  </div>

  <div class="allPhotoBuyer">
    <div class="photoBuyer">
      <h6>FOTO DARI PEMBELI (16)</h6>
    </div>
    <div class="allPhoto">
      <h6>Lihat Semua</h6>
    </div>
  </div>

  <div class="imgBuyerHeader">
    <div class="imgBuyerSmall" v-for="img in 12" :key="img">
      <img :src="image" alt="img-buyer">
    </div>
  </div>

  <!-- <div class="helpBuyer">
    <h1>ULASAN PALING MEMBANTU</h1>
  </div>

  <div class="headerCardBuyer">
    <div class="bodyCardBuyer">
      <div class="profileCardBuyer">
        <div class="profileCardPhoto">
          <img src="https://ecs7.tokopedia.net/img/cache/100-square/user-1/2019/12/24/1576349/1576349_b1af5acc-0f63-4177-b3b2-877c242efe5c.jpg" alt="">
        </div>
        <div class="bodyProfileCard">
          <div class="nameProfileCard">
            <p>Luthfi</p>
          </div>
          <div class="starProfile">
            <div class="starProfileCard" v-for="star in 5" :key="star">
              <img src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/4ed9ea8f.svg" alt="">
            </div>
            <div class="starProfileTime">
              <p>4 bulan lalu</p>
            </div>
          </div>
        </div>
      </div>
      <div class="reviewProductBuyer">
        <p>Alfa cocok untuk daily use siang hari</p>
      </div>
      <div class="photoProductBuyer">
        <img src="https://ecs7.tokopedia.net/img/cache/100-square/attachment/2019/12/4/0/0_efc48d3e-8c41-4fe4-b507-7557eefd5366.png" alt="">
      </div>
      <div class="feedbackProductBuyer">
        <p>Apakah ulasan ini membantu?</p>
      </div>
    </div>
  </div> -->
  <div>
    <reviewProduct/>
  </div>
  <div>
    <discussionProduct/>
  </div>
  <div>
    <anotherProduct/>
  </div>
  <div>
    <likeProduct/>
  </div>
  <div>
    <buyProduct/>
  </div>
  <div>
    <findProduct/>
  </div>
</div>
</template>

<script>
import likeProduct from './likeProduct.vue';
import buyProduct from './buyProduct.vue';
import findProduct from './findProduct.vue';
import discussionProduct from './discussionProduct.vue';
import anotherProduct from './anotherProduct.vue';
import reviewProduct from './reviewProduct.vue';

export default {
  name: 'contentProduct',
  props: [
    'name',
    'description',
    'image',
  ],
  components: {
    reviewProduct,
    discussionProduct,
    anotherProduct,
    likeProduct,
    buyProduct,
    findProduct,
  },

};
</script>

<style scoped>
.headerDescription {
  display: flex;
  flex-direction: column;
  background: white;
  width: 100%;
  padding: 24px 24px;
  border-bottom: 1px solid lightgray;
}

.titleDescription h5 {
  color: rgba(49, 53, 59, 0.68);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  font-family: sans-serif;
}

.bodyDescription p {
  color: rgba(49, 53, 59, 0.68);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  font-family: sans-serif;
}

.noteStore {
  display: flex;
  flex-direction: column;
  padding: 24px 24px 0;
  border-bottom: 1px solid lightgray;
}

.storeNote h3 {
  color: rgba(49, 53, 59, 0.68);
  font-size: 12px;
  font-weight: 700;
  font-family: sans-serif;
}

.storeNoteChild {
  display: flex;
  flex-direction: column;
  margin: 14px 0;
  padding: 0 0 0 40px;
}

.storeNoteSend h3 {
  font-size:12px;
  font-weight:700;
  font-family: sans-serif;
}

.storeNoteContent p {
  line-height: 18px;
  font-size: 12px;
  color: rgba(49, 53, 59, 0.68);
  font-family: sans-serif;
  box-sizing: border-box;
}

.storeNoteTime {
  display: flex;
  flex-direction: row;
}

.noteTime p {
  color: rgba(49, 53, 59, 0.32);
  font-size: 12px;
  font-weight: 400;
  font-family: sans-serif;
  width: 170px;
  background: white;
}

.noteFull {
  background: white;
  width: 83px;
  height: 17px;
  margin: 0 0 0 1000px;
}

.noteFull p {
  font-size: 12px;
  font-weight: 700;
  font-family: sans-serif;
  color: rgb(66, 181, 73);
  cursor: pointer;
}

.reviewHeader {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 32px 0 12px 24px;
  box-sizing: border-box;
  background: white;
}

.reviewTotal h3 {
  font-size: 16px;
  font-family: sans-serif;
  color: rgba(49, 53, 59, 0.68);
  text-transform: uppercase;
  font-weight: 800;
}

.reviewContent h5 {
  font-size: 14px;
  color: rgba(49, 53, 59, 0.96);
  font-weight: 400;
  margin-top: 10px;
  font-family: sans-serif;
}

.ratingHeader {
  padding: 0 24px;
  display: flex;
  flex-direction: row;
}

.ratingBody {
  display: flex;
  flex-direction: column;
}

.ratingValue h1 {
  font-size: 60px;
}

.ratingValue h1 span {
  font-size: 16px;
  font-family: sans-serif;
}

.starRating {
  display: flex;
  flex-direction: row;
}
.ratingStar img {
  width: 22px;
  height: 20px;
  margin: 0;
}

.ratingReview h6 {
  font-size: 12px;
  margin: 12px 0 0 18px;
}

.allPhotoBuyer {
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0 0 0 24px;
}

.photoBuyer {
  margin: 32px 0 16px;
}

.photoBuyer h6 {
  color: rgba(49, 53, 59, 0.68);
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 800;
}

.allPhoto {
  margin: 32px 0 16px;
}

.allPhoto h6 {
  color: rgb(66, 181, 73);
  font-size: 12px;
  font-weight: 800;
  cursor: pointer;
  text-transform: capitalize;
  margin: 0 0 0 1070px;
}

.imgBuyerHeader {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0 0 0 24px;
}

.imgBuyerSmall img {
  width: 89px;
  height: 89px;
  border-radius: 5px;
  margin: 0 20px 0 0;
  object-fit: cover;
}

.helpBuyer {
  width: 100%;
  padding: 24px 0 0 24px ;
}

.helpBuyer h1 {
  color: rgba(49, 53, 59, 0.68);
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 800;
}

.headerCardBuyer {
  width: 100%;
  padding: 24px 24px;
}

.bodyCardBuyer {
  width: 442px;
  height: 247px;
  border: 1px solid lightgray;
  border-radius: 7px;
  padding: 16px 16px 10px;
}

.nameProfileCard p {
  box-sizing: border-box;
  margin: 0 0 0 5px;
  padding: 0px;
  font-size: 14px;
  font-family: sans-serif;
  color: rgb(66, 181, 73);
  font-weight: 700;
}

.profileCardBuyer {
  display: flex;
  flex-direction: row;
}

.bodyProfileCard {
  display: flex;
  flex-direction: column;
}

.profileCardPhoto {
  padding: 5px;
}

.profileCardPhoto img {
  border-radius: 50%;
  width: 35px;
  height: 35px;
}

.starProfile {
  display: flex;
  flex-direction: row;
}

.starProfileCard {
  height: 15px;
  margin: 0px;
}

.starProfileCard img {
  width: 12px;
  height: 12px;
  margin: 0 0 0 3px;
}

.starProfileTime p {
  color: rgba(49, 53, 59, 0.32);
  font-size: 12px;
  font-family: sans-serif;
  margin: 5px 0 0 10px;
  padding: 0;
}

.reviewProductBuyer {
  background: white;
}

.reviewProductBuyer p {
  font-size: 12px;
  font-family: sans-serif;
  margin: 10px 0 10px 0;
}

.photoProductBuyer img {
  width: 60px;
  height: 60px;
  border-radius: 4px;
}

.feedbackProductBuyer {
  background: white;
  border-top: 1px solid lightgray;
  margin: 20px 0 0 0;
  height: 42px;
  padding: 20px 0 0 0;
}

.feedbackProductBuyer p {
  font-size: 12px;
  font-weight: 400;
  font-family: sans-serif;
}
</style>
