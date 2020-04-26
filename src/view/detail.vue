<template>
<div>
  <div class="navbar">
    <h1>Tokopedia</h1>
  </div>
  <div class="navbarAddCart">
    <navbarAddCart/>
  </div>
  <div class="detailContent">
    <div class="imgContent">
      <div class="imgBody">
        <div class="imgProduct">
          <img src="https://ecs7.tokopedia.net/img/cache/700/product-1/2019/7/20/71327545/71327545_e19ad82a-79c0-44f3-8073-38a78ff12a08_700_700.webp" alt="">
        </div>
      </div>
      <div class="imgCard">
        <div class="imgCardSmall">
          <img src="https://ecs7.tokopedia.net/img/cache/700/product-1/2019/7/20/71327545/71327545_e19ad82a-79c0-44f3-8073-38a78ff12a08_700_700.webp" alt="">
        </div>
        <div class="imgCardSmall">
          <img src="https://ecs7.tokopedia.net/img/cache/700/product-1/2019/7/20/71327545/71327545_e19ad82a-79c0-44f3-8073-38a78ff12a08_700_700.webp" alt="">
        </div>
        <div class="imgCardSmall">
          <img src="https://ecs7.tokopedia.net/img/cache/700/product-1/2019/7/20/71327545/71327545_e19ad82a-79c0-44f3-8073-38a78ff12a08_700_700.webp" alt="">
        </div>
        <div class="imgCardSmall">
          <img src="https://ecs7.tokopedia.net/img/cache/700/product-1/2019/7/20/71327545/71327545_e19ad82a-79c0-44f3-8073-38a78ff12a08_700_700.webp" alt="">
        </div>
        <div class="imgCardSmall">
          <img src="https://ecs7.tokopedia.net/img/cache/700/product-1/2019/7/20/71327545/71327545_e19ad82a-79c0-44f3-8073-38a78ff12a08_700_700.webp" alt="">
        </div>
      </div>
    </div>
    <div class="productDetail">
      <detailProduct/>
    </div>
  </div>
  <div>
    <headerContent/>
  </div>
  <div>
    <contentProduct/>
  </div>
</div>
</template>

<script>
// import typeList from '../components/_module/typeList.vue';
import navbarAddCart from '../components/_module/navbarAddCart.vue';
import headerContent from '../components/_module/headerContent.vue';
import contentProduct from '../components/_module/contentProduct.vue';
import detailProduct from '../components/_module/detailProduct.vue';

export default {
  name: 'detail',
  components: {
    detailProduct,
    navbarAddCart,
    headerContent,
    contentProduct,
    // typeList,
  },
  computed: {
    getProduct() {
      return this.$store.state.product;
    },
  },
};
</script>

<style scoped>
.navbar {
  width: 100%;
  height: 110px;
  background: blue;
}

.detailContent {
  background: white;
  display: flex;
  flex-direction: row;
}

.imgContent {
  background: white;
  width: 35%;
  margin: 50px 15px;
}

.imgBody {
  display: flex;
  flex-direction: column;
}

.imgProduct {
  width: 100%;
}

.imgProduct img{
  width: 472px;
  height: 466px;
  object-fit: cover;
  border-radius: 10px;
  cursor: crosshair;
}

.imgCard {
  background: white;
  border-top: 1px solid lightgray;
  width: 100%;
  height: 93px;
  display: flex;
  flex-direction: row;
  margin: 20px 0 0;
}

.imgCardSmall:hover {
  transform: scale(1.1);
  transition: linear 0.25s;
}

.imgCardSmall {
  overflow: hidden;
  transition: linear 0.25s;
}

.imgCardSmall img {
  width: 72px;
  height: 72px;
  border-radius: 10px;
  object-fit: contain;
  margin: 10px 11px;
}

.productDetail {
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin-top: 50px;
  padding-left: 60px;
}
</style>
