<template>
  <div class="side-info">
    <section class="people-name">
      <img src="../../assets/img/default_toped-26.jpg" alt="">
      <div class="name-status">
        <h1>{{dataUser.name}}</h1>
        <p> <i class="fas fa-egg"></i> 0 points</p>
        <h1>Toko Points</h1>
      </div>
    </section>
    <section class="deposit">
      <div class="ovo-info">
        <div class="logo-ovo">
          <img src="../../assets/img/ovo-logo.png" alt="">
        </div>
        <div class="ovo-type">
          <div class="cash-ovo">
            <p>OVO Cash</p>
            <p>Rp. 0</p>
          </div>
          <div class="cash-point">
            <p>OVO Point</p>
            <p>5.944</p>
          </div>
        </div>
      </div>
      <div class="saldo-info">
        <img src="../../assets/img/tokocash-color.svg" alt="">
        <div class="sld-txt">
          <p>Saldo</p>
          <h5>Rp. 47.900</h5>
        </div>
      </div>
    </section>
    <section class="store-flash-info">
      <div class="title-store">
        <img class="img-slr" src="../../assets/img/seller_no_logo_3.png" alt="">
        <div class="nm-str">
          <p>Ipi Reload</p>
          <img class="badge" src="../../assets/img/bag.jpg" alt="">
        </div>
      </div>
      <div class="status-store">
        <p class="perform">Performa Toko <i class="fas fa-info-circle"></i></p>
        <div class="rating-store">
          <h1>80</h1> <p> / 100</p>
        </div>
      </div>
      <button class="btn-upgrd-store">Upgrade Power Merchant</button>
      <div class="txt-upgrd-store">
        <p class="topads">Tingkatkan penjualan dgn TopAds</p>
        <h1 class="nxt">Pelajari selengkapnya</h1>
      </div>
    </section>
    <section class="inbox" >
      <h1 class="drp-dwn" @click="inbox = !inbox"><b>KOTAK MASUK
        <i class="fas fa-angle-down"></i></b></h1>
      <ul class="ul-dwn" :class="inbox ? '' : 'hide'">
        <li>chat</li>
        <li>Diskusi Prodeuk</li>
        <li>Ulasan</li>
        <li>Pesan bantuan</li>
        <li>Komplain Pesan</li>
        <li>update</li>
      </ul>
    </section>
    <section class="purchase">
      <h1 class="drp-dwn" @click="purchase = !purchase"><b>PEMBELIAN
        <i class="fas fa-angle-down"></i></b></h1>
        <ul class="ul-dwn" :class="purchase ? '' : 'hide'">
          <li>Menunggu Pembayaran</li>
          <li>Daftar Transaksi</li>
      </ul>
    </section>
    <section class="my-store">
      <h1 class="drp-dwn" @click="storeHide = !storeHide"><b>TOKO SAYA
        <i class="fas fa-angle-down"></i></b></h1>
      <ul class="ul-dwn" :class="storeHide ? '' : 'hide'">
        <li>Penjualan</li>
        <li>Tambah Produk</li>
        <li>Daftar Produk</li>
        <li>Statistik</li>
        <li>TopAds</li>
        <li>Peluang</li>
        <li>Pinjaman Modal</li>
        <li>Pengaturan toko</li>
        <li>pengaturan Admin</li>
      </ul>
    </section>
    <section class="my-profile">
        <h1 class="drp-dwn" @click="prflHide = !prflHide"><b>PROFIL SAYA
        <i class="fas fa-angle-down"></i></b></h1>
        <ul class="ul-dwn" :class="prflHide ? '' : 'hide'">
          <li>Wishlist</li>
          <li>Toko Faforit</li>
          <li>Pengaturan</li>
        </ul>
    </section>
    <section class=""></section>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'editSideBar',
  data() {
    return {
      purchase: true,
      inbox: true,
      storeHide: true,
      prflHide: true,
      dataUser: [],
      local: null,
    };
  },
  created() {
    this.local = localStorage.getItem('id');
  },
  computed: {
    cardUser() {
      return this.$store.state.forUser;
    },
  },
  methods: {
    getUserById() {
      axios.get(`http://192.168.1.97:5000/api/arkapedia/user/${this.local}`)
        // eslint-disable-next-line no-unused-vars
        .then((res) => {
          // eslint-disable-next-line no-unused-expressions
          // resolve.res.data;
          this.dataUser = res.data.user;
          console.log(res.data.user);
        })
        // eslint-disable-next-line no-unused-vars
        .catch((err) => {
        });
    },
  },
  mounted() {
    this.getUserById();
  },
};
</script>

<style scoped>
  .side-info{
    display: flex;
    flex-direction: column;
    width: 200px;
    border: 1px solid #e0e0e0;
    background: #fff;
    border-radius: 4px;
    font-family: 'Open Sans', sans-serif;
  }
  .people-name{
    display: flex;
    width: 170px;
    height: 178;
    padding: 12px 12px 12px 16px;
  }
  .people-name img{
    width: 35px;
    height: 35px;
    border-radius: 8;
    margin-right: 20px;
  }
  .name-status h1{
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #42b549;
    height: 40px;
  }
  .name-status h2{
    font-size: 11px;
    color: #42b549;
    font-family: 'Open Sans', sans-serif;
  }
  .name-status p{
    font-size: 11px;
    color: rgba(49, 53, 59, 0.44);
  }
  .deposit{
    width: 198px;
    height: 150px;
  }
  .store-flash-info{
    width: 198px;
    height: 241px;
  }
  .inbox{
    width: 198px;
  }
  .drp-dwn{
    font-size: 12px;
    margin-left: 20px;
    cursor: pointer;
  }
  .hide{
    display: none;
  }
  .ul-dwn li{
    font-size: 12px;
    color: #42b549;
    width: 100%;
    list-style: none;
    margin-left: 20px ;
    padding: 5px 0;
    cursor: pointer;
  }
  .ul-dwn li:hover{
    color: #FF5722;
    background: #f7f7f7;
  }
  .purchase{
    width: 198px;
  }
  .purchase li:hover{
    color: #FF5722;
    background: #f7f7f7;
  }
  .my-store{
    width: 198px;
  }
  .my-profile{
    width: 198px;
  }
  .ovo-info{
    display: flex;
    font-size: 11px;
    color: rgba(0, 0, 0, 0.7);
    height: 70px;
  }
  .logo-ovo img{
    width: 25px;
    height: 25px;
    margin: 12px 0 0px 10px;
  }
  .ovo-type{
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #eee;
  }
  .cash-ovo{
    display: flex;
  }
  .cash-ovo p{
    margin: 10px 20px 0 20px;
  }
  .cash-point{
    display: flex;
  }
  .cash-point p{
    margin: 10px 20px 0 20px;
  }
  .saldo-info{
    display: flex;
    height: 70px;
    border-bottom: 1px solid #eee;
    margin-bottom: 100px;
  }
  .saldo-info p{
    font-size: 11px;
    margin: 10px 20px 0 20px;
  }
  .saldo-info h5{
    font-size: 11px;
    margin: 10px 20px 0 20px;
  }
  .title-store{
    display: flex;
    /* background: #ffffff; */
  }
  .img-slr{
    border-radius: 5px;
    width: 37px;
    height: 37px;
    padding: 5px;
    border: 1px solid #eee;
    margin: 10px;
  }
  .nm-str{
    display: flex;
    flex-direction: column;
    height: 50px;
  }
  .nm-str p{
    font-size: 12px;
    color: #42b549;
    margin: 10px 0;
  }
  .badge{
    width: 100px;
    height: px;
    background: chartreuse;
  }
  .status-store{
    display: flex;
    flex-direction: column;
    height: 40px;
    margin-left: 30px;
  }
  .rating-store{
    display: flex;
  }
  .rating-store h1{
    font-size:20px ;
    color: #42b549;
    margin-top: -15px;
  }
  .rating-store p{
    font-size: 12px;
    color: rgba(0, 0, 0, 0.38);
    margin-top: -10px ;
  }
  .perform{
    font-size: 11px;
    color: rgba(0, 0, 0, 0.54);
  }
  .btn-upgrd-store{
    width: 168px;
    height: 30px;
    background: #42b549;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    font-size: 11px;
    margin: 15px ;
  }
  .topads{
    font-size: 11px;
    color: rgba(0, 0, 0, 0.54);
  }
  .nxt{
    font-size: 12px;
    color: #42b549;
    margin-top: -10px;
  }
  .nxt:hover{
    color: #FF5722;
  }
  .txt-upgrd-store{
    display: flex;
    flex-direction: column;
    height: 30px;
    margin-left: 15px ;
  }
</style>
