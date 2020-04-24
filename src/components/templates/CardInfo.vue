<template>
  <div class="card">
    <div class="card-header">
      <img style="img-profile" src="https://cdn-images-1.medium.com/max/1200/1
      *MXs1FwFyaYzs9H_iumC8Lw.jpeg" alt="img-profile">
      <div class="profile">
        <p class="name">Ady Rahmansyah</p>
        <p class="status">Verified Account</p>
      </div>
    </div>
    <div class="card-body">
      <p class="card-title">{{ name }}</p>
      <p class="card-price">Rp. {{ price }}</p>
      <div class="location">
        <p>{{ location }}</p>
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
  name: 'CardInfo',
};
</script>

<style lang="scss" scoped>

</style>