<template>
    <div class="cart">
        <Navbar/>
    <div class="container">
        <div class="col-md-8">
            <Purchase/>
        </div>
        <div class="col-md-4">
            <Minis/>
        </div>
    </div>
    <div class="content-card">
    <div class="text-conten-card">Terakhir Dilihat
    <span class="text-conten-see">Lihat Semua</span></div>

    </div>
    <div>
    <div class="card-list">
    <div class="row">
        <div class="col">
            <Card v-for="data in items" :key="data.id"
             :name="data.name" :price="data.price" :image="data.image.image1"
             :location="data.shop.location" :rating="data.id" :id="`detail/${data.id}`"/>
        </div>
    </div>
    </div>
    </div>
    <div>
      </div>
        <Footer/>
    </div>
</template>

<script>
import axios from 'axios';
import Footer from '../components/small/footer.vue';
import Purchase from '../components/small/box-purchase.vue';
import Navbar from '../components/Navbar/Navbar.vue';
import Minis from '../components/small/mini-sidebar.vue';
import Card from '../components/small/card.vue';

export default {
  name: 'Cart',
  data() {
    return {
      items: [],
    };
  },
  components: {
    Footer,
    Purchase,
    Navbar,
    Minis,
    Card,
  },
  methods: {
    getallproduct() {
      axios.get('http://192.168.1.97:5000/api/arkapedia/product')
        .then((res) => {
          this.items = res.data.Products.rows;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getallproduct();
  },
};
</script>

<style scoped>
  .content-card{
      margin-top: 30px;
  }
  .text-conten-card{
      position: relative;
      padding-left: 80px;
      color: rgb(82, 86, 94);
      font-weight: 800;
      line-height: 1.5;
      margin-bottom: 0px;
      left: 50px;
      width: 500px;
  }

    .text-conten-see{
        position: relative;
        left: 748px;
        color: rgb(3, 172, 14);
        text-decoration: none;
        padding: 0px;
        font-weight: 800;
        width: 300px;
        cursor: pointer;
    }
    .card-list{
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
    }

    .col-md-4{
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .container{
        padding-top: 150px;
        max-width: 1300px;
        display: flex;
    }

</style>
