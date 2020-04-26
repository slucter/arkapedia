<template>
<div class="containerDetailContent">
  <div class="navbar">
    <Navbar/>
    <!-- <h1>Tokopedia</h1> -->
  </div>
  <div class="navbarAddCart">
    <navbarAddCart :name="product.shop.name" :location="product.shop.location"/>
  </div>
  <div class="detailContent">
    <div class="imgContent">
      <div class="imgBody">
        <div class="imgProduct">
          <img :src="product.image.image1" alt="img-product">
        </div>
      </div>
      <div class="imgCard">
        <div class="imgCardSmall">
          <img :src="product.image.image1" alt="img-product">
        </div>
        <div class="imgCardSmall">
          <img :src="product.image.image1" alt="img-product">
        </div>
        <div class="imgCardSmall">
          <img :src="product.image.image1" alt="img-product">
        </div>
        <div class="imgCardSmall">
          <img :src="product.image.image1" alt="img-product">
        </div>
        <div class="imgCardSmall">
          <img :src="product.image.image1" alt="img-product">
        </div>
      </div>
    </div>
    <div class="productDetail">
      <detailProduct :name="product.name" :price="product.price" />
    </div>
  </div>
  <div>
    <headerContent/>
  </div>
  <div>
    <contentProduct :name="product.name" :description="product.description"
    :image="product.image.image1"/>
  </div>
</div>
</template>

<script>
import axios from 'axios';
import Navbar from '../components/Navbar/Navbar.vue';
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
    Navbar,
  },
  data() {
    return {
      product: null,
    };
  },
  methods: {
    getDetail() {
      axios.get(`http://192.168.1.97:5000/api/arkapedia/product/${this.$route.params.id}`)
        .then((res) => {
          this.product = res.data.product;
          console.log(res.data.product);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getDetail();
  },
  // computed: {
  //   getProduct() {
  //     return this.$store.state.product;
  //   },
  // },
};
</script>

<style scoped>
/* .navbar {
  width: 100%;
  height: 110px;
  background: blue;
} */
.containerDetailContent {
  margin-top: 60px;
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
