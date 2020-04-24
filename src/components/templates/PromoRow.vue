<template>
  <div class="promo-row">
    <div class="promo">
      <div class="intro-promo">
        <h3>Official Store</h3>
        <p>Lihat Semua</p>
      </div>
      <div class="image-promo">
      </div>
    </div>
    <div class="promo">
      <div class="intro-promo">
        <h3>Lengkapi Persediaanmu</h3>
      </div>
      <div class="image-promo">
      </div>
    </div>
  </div>
</template>

<script>
// import CardDiscount from '@/components/CardDiscount.vue';

export default {
  name: 'PromoRow',
  components: {
    // CardDiscount,
  },
};
</script>

<style lang="scss" scoped>
  .promo-row{
    display: flex;
    width: 100%;
    justify-content: center;
    max-width: 1200px;
    margin-bottom: 32px;
  }
  .promo{
    height: 240px;
    padding: 1% 2%;
    width: 50%;
  }
  .image-promo{
    background-color: #eaeaea;
    height: 190px;
  }
  .intro-promo{
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  }
  .intro-promo h3{
    font-weight: 700;
    font-size: 20px;
  }
  .intro-promo p{
    font-weight: 700;
    margin: 0;
  }
</style>
