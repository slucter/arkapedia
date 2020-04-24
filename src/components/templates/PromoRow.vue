<template>
  <div class="promo-row">
    <div class="promo">
      <div class="intro-promo">
        <h3>Official Store</h3>
        <p>Lihat Semua</p>
      </div>
      <div class="image-promo">
        <div class="promo1"></div>
        <div class="promo2"></div>
        <div class="promo3"></div>
      </div>
    </div>
    <div class="promo">
      <div class="intro-promo">
        <h3>Lengkapi Persediaanmu</h3>
      </div>
      <div class="image-promo">
        <div class="promo4"></div>
        <div class="promo5"></div>
        <div class="promo6"></div>
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
    // background-color: #eaeaea;
    height: 170px;
    display: flex;
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
  .promo1, .promo2, .promo3, .promo4, .promo5, .promo6{
    width: 33.3%;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
  }
  .promo1{
    background-image: url('https://ecs7.tokopedia.net/img/cache/200-square/attachment/2020/4/23/71149346/71149346_8b11391c-92bb-4305-aa74-c772e2db0837.jpg.webp');
  }
  .promo2{
    background-image: url('https://ecs7.tokopedia.net/img/cache/200-square/attachment/2020/4/23/71149346/71149346_d8cb9a94-d408-437a-bb28-c3f203821124.jpg.webp');
  }
  .promo3{
    background-image: url('https://ecs7.tokopedia.net/img/cache/200-square/attachment/2020/4/23/71149346/71149346_4d621217-0ccd-4d6d-a783-4f580c87195f.jpg.webp');
  }
  .promo4{
    background-image: url('https://ecs7.tokopedia.net/img/cache/200-square/attachment/2020/4/17/88321389/88321389_7d2dccd9-b1da-4ff2-9026-297609e87cc9.jpg.webp');
  }
  .promo5{
    background-image: url('https://ecs7.tokopedia.net/img/cache/200-square/attachment/2020/4/17/88321389/88321389_65a980b5-957b-40dd-938a-c63d86e3ac01.jpg.webp');
  }
  .promo6{
    background-image: url('https://ecs7.tokopedia.net/img/cache/200-square/attachment/2020/4/17/88321389/88321389_9f94f494-0114-4b92-9015-c29a11e7b64a.jpg.webp');
  }
</style>
