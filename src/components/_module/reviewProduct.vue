<template>
<div class="headerReview">
  <div class="bodyReview">
    <div class="reviewFilter">
      <h1>Filter</h1>
    </div>
    <div class="reviewAll">
      <h5>Semua (1370)</h5>
    </div>
    <div class="reviewPhoto">
      <h5>Dengan Foto (275)</h5>
    </div>
    <div class="reviewStar">
      <h5><img src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/4ed9ea8f.svg" alt="">5</h5>
    </div>
    <div class="reviewStar">
      <h5><img src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/4ed9ea8f.svg" alt="">4</h5>
    </div>
    <div class="reviewStar">
      <h5><img src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/4ed9ea8f.svg" alt="">3</h5>
    </div>
    <div class="reviewStar">
      <h5><img src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/4ed9ea8f.svg" alt="">2</h5>
    </div>
    <div class="reviewStar">
      <h5><img src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/4ed9ea8f.svg" alt="">1</h5>
    </div>
  </div>
  <div class="headerAllReview">
    <h5>SEMUA ULASAN (1370)</h5>
  </div>
  <div class="containerAllReview">
    <div class="bodyAllReview" v-for="review in 4" :key="review">
      <div class="photoAllReview">
        <div>
          <img src="https://ecs7.tokopedia.net/img/cache/100-square/user-1/2017/11/1/6315729/6315729_fe2d96cf-b8b9-44ee-a0af-949ba0eee7cb.jpg" alt="">
        </div>
        <div class="photoNameReview">
          <div class="nameReview">
            <h5>Jodi</h5>
          </div>
          <div class="timeReview">
            <p>1 hari lalu</p>
          </div>
        </div>
      </div>
      <div class="headerContentAllReview">
        <div class="headerStarAllReview">
          <div class="starAllReview" v-for="star in 5" :key="star">
            <img src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/4ed9ea8f.svg" alt="">
          </div>
        </div>
        <div class="contentAllReview">
          <h5>Produk dikemas sangat rapih, wanginya enak dan mudah dibawa. Very recommended!</h5>
        </div>
        <div class="imgAllReview">
          <img src="https://ecs7.tokopedia.net/img/cache/100-square/attachment/2020/4/21/inv/inv_3523dfe7-8796-4d96-8b1c-b43c47560dec.jpg" alt="">
        </div>
      </div>
      <div class="likeAllReview">
        <img src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/dbe185c5.svg" alt="">
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'reviewProduct',
};
</script>

<style scoped>
.headerReview {
  padding: 0 24px;
}

.bodyReview {
  display: flex;
  flex-direction: row;
  width: 100%;
  background: white;
}

.reviewFilter {
  margin: 0 60px 0 0;
}

.reviewFilter h1 {
  font-size: 16px;
  font-family: sans-serif;
  font-weight: 400;
  line-height: 40px;
}

.reviewAll {
  margin: 0 8px 8px 0;
}

.reviewAll h5 {
  font-size: 14px;
  font-family: sans-serif;
  font-weight: 400;
  border: 1px solid;
  border-color: rgb(70, 184, 79);
  border-radius: 16px;
  padding: 12px 12px;
  background-color: rgb(235, 255, 239);
}

.reviewPhoto {
  margin: 0 8px 8px 0;
}

.reviewPhoto h5 {
  font-size: 14px;
  font-family: sans-serif;
  font-weight: 400;
  border: 1px solid;
  color: rgba(41, 44, 49, 0.718);
  border-color: rgb(202, 203, 205);
  border-radius: 16px;
  padding: 12px 12px;
}

.reviewStar {
  margin: 0 8px 8px 0;
}

.reviewStar h5 {
  border: 1px solid;
  color: rgba(41, 44, 49, 0.718);
  border-color: rgb(202, 203, 205);
  border-radius: 16px;
  padding: 10px 12px;
  font-size: 14px;
}

.reviewStar img {
  width: 20px;
  height: 20px;
}

.containerAllReview {
  display: flex;
  flex-direction: column;
}

.headerAllReview {
  margin: 32px 0 16px;
}

.headerAllReview h5 {
  line-height: 18px;
  font-size: 12px;
  color: rgba(49, 53, 59, 0.68);
  font-weight: 800;
  font-family: sans-serif;
}

.bodyAllReview {
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 24px 0;
  border-bottom: 1px solid lightgray;
}

.photoAllReview {
  display: flex;
  flex-direction: row;
  width: 202px;
}

.photoAllReview img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
}

.photoNameReview {
  display: flex;
  flex-direction: column;
  padding: 10px 0 0 16px;
}

.nameReview h5 {
  margin: 0px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 800;
}

.timeReview p {
  margin: 0px;
  font-size: 12px;
  line-height: 16px;
}

.headerContentAllReview {
  display: flex;
  flex-direction: column;
  width: 792px;
  padding: 0 16px;
  border-right: 1px solid lightgray;
}

.headerStarAllReview {
  display: flex;
  flex-direction: row;
}

.starAllReview img {
  width: 12px;
  height: 12px;
  margin: 0 5px 0 0;
}

.contentAllReview h5 {
  font-size: 14px;
  font-weight: 400;
}

.imgAllReview img {
  width: 60px;
  height: 60px;
  border-radius: 8px;
}

.likeAllReview {
  padding: 0 0 0 16px;
}

.likeAllReview img {
  padding: 8px 16px;
  border: 1px solid lightgray;
  border-radius: 8px;
  cursor: pointer;
}
</style>
