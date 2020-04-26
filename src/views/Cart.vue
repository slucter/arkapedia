<template>
    <div>
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
    <div class="row" v-for="row in 20" :key="row.id" >
        <div class="col">
            <Card/>
        </div>
    </div>
    </div>
    </div>
    <div>
        <Footer/></div>
    </div>
</template>

<script>
import Footer from '../components/small/footer.vue';
import Purchase from '../components/small/box-purchase.vue';
import Navbar from '../components/Navbar/Navbar.vue';
import Minis from '../components/small/mini-sidebar.vue';
import Card from '../components/small/card.vue';

export default {
  name: 'Cart',
  components: {
    Footer,
    Purchase,
    Navbar,
    Minis,
    Card,
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
