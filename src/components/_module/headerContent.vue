<template>
<div class="headerContent">
  <div class="headerDescription">
    <h3>Deskripsi</h3>
  </div>
  <div class="headerReview">
    <h3>Ulasan (1369)</h3>
  </div>
  <div class="headerDiscussion">
    <h3>Diskusi (170)</h3>
  </div>
  <div class="headerRecommendation">
    <h3>Rekomendasi</h3>
  </div>
</div>
</template>

<script>
export default {
  name: 'headerContent',
};
</script>

<style scoped>
.headerContent {
  background: white;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 53px;
  margin: 0 0 0 0px;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
}

.headerDescription {
  padding: 16px 24px;
}

.headerDescription h3 {
  color: rgb(3, 172, 14);
  font-size: 14px;
  font-weight: 700;
  font-family: sans-serif;
}

.headerReview {
  padding: 16px 24px;
}

.headerReview h3 {
  color: rgba(49, 53, 59, 0.32);
  font-size: 14px;
  font-weight: 700;
  font-family: sans-serif;
}

.headerDiscussion {
  padding: 16px 24px;
}

.headerDiscussion h3 {
  color: rgba(49, 53, 59, 0.32);
  font-size: 14px;
  font-weight: 700;
  font-family: sans-serif;
}

.headerRecommendation {
  padding: 16px 24px;
}

.headerRecommendation h3 {
  color: rgba(49, 53, 59, 0.32);
  font-size: 14px;
  font-weight: 700;
  font-family: sans-serif;
}
</style>
