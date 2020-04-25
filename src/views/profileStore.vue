<template>
    <div class="container-profile-store">
        <Navbar/>
        <div class="store-alert">
            <img src="../assets/img/warn.svg" alt="">
            <h1><b>Toko Anda belum aktif</b></h1>
            <p>Tambahkan produk pertamamu dan saatnya meraih calon pembeli!</p>
        </div>
        <div class="fluid">
            <div class="side-left">
                <div class="seller-no-logo">
                <img src="../assets/img/seller_no_logo_3.png" alt="">
                </div>
                <div class="flash-info">
                    <div class="name-str">
                        <h1><b>Ipi Reload</b></h1>
                        <img src="../assets/img/bag.jpg" alt="">
                    </div>
                    <div class="rspnsv">
                        <div class="stts"><b>Online</b></div>
                        <p>Di balas ± 1 menit</p>
                        <i class="fas fa-map-marker-alt"></i>
                        <p>Tangerang selatan</p>
                    </div>
                    <button class="btn-info"> Info Toko</button>
                </div>
            </div>
            <div class="side-right">
                <div class="product-sold-count">
                    <h3>Produk Terjual</h3>
                    <p>No Transaction</p>
                </div>
                <div class="rate-product">
                    <h3>Nilai kalitas produk</h3>
                    <div class="star">
                        <img src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/3ade5501.svg" alt="">
                    <p>Belum ada ulasan</p></div>
                    <p>Lihat statistik toko</p>
                </div>
            </div>
        </div>
        <div class="tablist">
            <section class="tblst">Produk</section>
            <section class="tblst">Ulasan</section>
            <section class="tblst">Diskusi Product</section>
        </div>
        <div class="content-store">
            <aside class="sidebar"></aside>
            <div class="all-produk">
              <div class="nav-content">
                <div class="search-adress">
                  <input type="text" placeholder="Cari alamat" class="input-src">
                  <div class="icon-src"><i class="fas fa-search-location"></i></div>
                </div>
                    <p>Urutkan</p>
                    <select name="paling sesuai" id=""></select>
              </div>
              <div class="all-prdk-txt"> <h1>Semua Produk</h1> </div>
              <div class="content-product">
                  <div class="not-content">
                      <img src="../assets/img/a959bb5d (1).png" alt="">
                      <div class="notif-none">
                          <h1>Toko Anda Belum Memiliki Produk</h1>
                          <p>Yuk isi tokomu dengan produk unggulan</p>
                          <router-link to="add" class="add-product">Tambah Produk</router-link>
                      </div>
                  </div>
              </div>
            </div>
        </div>
        <input type="range" min="0" max="1" v-model="coba" @change="slider">
    </div>
</template>

<script>
import Navbar from '../components/Navbar/Navbar.vue';

export default {
  name: 'profileStore',
  components: {
    Navbar,
  },
  data() {
    return {
      coba: 0,
    };
  },
  methods: {
    slider() {
      console.log(this.coba);
    },
  },
};
</script>

<style scoped>
    .container-profile-store{
        display: flex;
        margin-top: 130px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .store-alert{
        display: flex;
        flex-direction: column;
        width: 1200px;
        height: 74px;
        background: #fffae6;
        padding: 12px 16px;
        border-radius: 8px;
        overflow: hidden;
        margin-bottom: 40px;
    }
    .store-alert h1{
        font-size: 16px;
        margin-top: -5px;
    }
    .store-alert p{
        font-size: 14px;
        color: rgba(49, 53, 59, 0.96);
    }
    .store-alert img{
        position: relative;
        width: 35px;
        height: 27.5px;
        margin-top: -20px;
        margin-left: -25px ;
    }
    .fluid{
        display: flex;
        width: 1200px;
        height: 141px;
        background: #ffffff;
        margin: 22px 0 0;
        padding: 16px 24px;
        border-radius: 30px 30px 10px 10px;
        box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 10px 0px;
    }
    .tablist{
        display: flex;
        align-items: center;
        width: 1200px;
        height: 53px;
        background: #ffffff;
        margin: 10px 0;
        border-bottom: solid 1px rgba(0,0,0,0.12);
    }
    .tblst{
        margin: 10px 20px;
        font-size: 12px;
        color: rgba(49, 53, 59, 0.68);
    }
    .content-store{
        display: flex;
        width: 1200px;
    }
    .sidebar{
        display: flex;
        width: 266px;
        height: 134px;
        background: #ffffff;
        margin: 0 0 12px;
        padding: 10px;
        box-shadow: rgba(0, 0, 0, 0.07) 0px 2px 10px 0px, rgba(0, 0, 0, 0.09) 0px -1px 5px 0px;
        border-radius: 8px;
    }
    .side-left{
        display: flex;
        width: 579px;
        height: 109px;
    }
    .seller-no-logo{
        width: 98px;
        height: 109px;
    }
    .seller-no-logo img{
        width: 74px;
        height: 74px;
        border-radius: 50%;
        margin-top: -50px;
    }
    .flash-info{
        display: flex;
        flex-direction: column;
        width: 342px;
        height: 109px;
        padding: 0 0 0 12px;
    }
    .btn-info{
        width: 120px;
        height: 40px;
        margin: 0 16px 0 0;
        padding: 0 10px;
        color: rgba(49, 53, 59, 0.68);
        border: solid 1px rgba(0,0,0,0.12);
        border-radius: 8px;
        background: #ffffff;
    }
    .name-str{
        display: flex;
    }
    .name-str h1{
        font-size: 20px;
        color: rgba(49, 53, 59, 0.96);
    }
    .name-str img{
        width: 12px;
        height: 17px;
        margin: 0 10px;
    }
    .rspnsv{
        display: flex;
    }
    .rspnsv p{
        font-size: 12px;
        color: rgba(49, 53, 59, 0.96);
        padding: 0 10px;
    }
    .stts{
        width: 50px;
        height: 20px;
        font-size: 10px;
        color: #03ac0e;
        background: #d6ffde;
        border-radius: 5px;
        padding: 0 8px ;
    }
    .side-right{
        display: flex;
        width: 575px;
        height: 78px;
        border-left: solid 1px rgba(0,0,0,.12);
        margin-top: 15px;
    }
    .product-sold-count{
        width: 136px;
        height: 78px;
        display: flex;
        flex-direction: column;
        padding: 0 0 0 40px;
    }
    .rate-product{
        display: flex;
        flex-direction: column;
        width: 300px;
        height: 78px;
        padding: 0 0 0 56px;
    }
    .rate-product h3{
        font-size: 14px;
        color: rgba(49, 53, 59, 0.96);
        margin: 0 0 8px;
    }
    .rate-product p{
        font-size: 12px;
        font-weight: bold;
        color: #03ac0e;
        margin: 0 0 8px;
    }
    .star{
        display: flex;
    }
    .star img{
        width: 24px;
        height: 24px;
        margin: 0 10px 0 0;
    }
    .star p{
        font-size: 12px;
        color: rgba(49, 53, 59, 0.68);
    }
    .product-sold-count h3{
        font-size: 12px;
        color: rgba(49, 53, 59, 0.96);
        margin: 0 0 8px;
    }
    .product-sold-count p{
        font-size: 12px;
        font-weight: bold;
        color: rgba(49, 53, 59, 0.68);
        margin: 11px 0 0;
    }
    .search-adress{
    display: flex;
    height: 44px;
    width: 330px;
    border: solid 2px rgba(0,0,0,.12);
    border-radius: 5px;
    margin-right: 150px;
  }
  .input-src{
    padding: 0 50px 0 10px;
    height: 40px;
    width: 280px;
    border: none;
  }
  .icon-src{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1px 6px;
    background: #f8f8f8;
    height: 40px;
    width: 60px;
  }
  .nav-content{
      display: flex;
      width: 922px;
      height: 40px;
  }
  .all-prdk-txt{
      display: flex;
      width: 922px;
      margin: 14px 0 16px;
  }
  .all-prdk-txt h1{
      font-size: 16px;
      font-weight: 700;
  }
  .nav-content p{
      font-size: 14px;
      color: rgba(49, 53, 59, 0.96);
      font-weight: 700;
      padding: 10px 10px;
  }
  .nav-content select{
      width: 200px;
      height: 40px;
      border-radius: 5px;
      border: solid 1px rgba(0,0,0,.12);
      padding: 0 8px 0 16px;
  }
  .not-content{
      display: flex;
      height: 300px;
  }
  .not-content img{
      width: 226.02px;
      height: 174.97px;
  }
  .notif-none{
      display: flex;
      flex-direction: column;
      width: 241.98px;
      height: 152px;
      margin-left: 20px ;
  }
  .notif-none h1{
      font-size: 20px;
      color: rgba(49, 53, 59, 0.96);
      font-weight: 700;
  }
  .notif-none p{
      font-size: 14px;
      color: rgba(49, 53, 59, 0.68);
  }
  .add-product{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 234px;
      height: 40px;
      padding: 0 16px;
      background: #03ac0e;
      border: none;
      border-radius: 8px;
      color: #ffffff;
      text-decoration: none;
  }
  .all-produk{
      display: flex;
      flex-direction: column;
      padding: 0 0 0 12px;
  }
</style>
