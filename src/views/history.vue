<template>
  <div class="container-history">
      <Navbar/>
      <div class="flash-info">
          <img src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/87f7e6cc.svg" alt="">
          <h3>Buyer Info</h3>
          <p>Dikarenakan adanya pembatasan akses di beberapa wilayah Jabodetabek,
              pengiriman pesanan berpotensi mengalami keterlambatan.
              Mohon tunggu atau coba cek ke Pos Security perumahan kamu ya.
              Pastikan juga nomor telepon kamu selalu aktif untuk bisa dihubungi kurir.</p>
      </div>
      <div class="content">
          <editSidebar/>
          <div class="main-history">
              <div class="tablist">
                  <section class="sub-tablist-active">daftar belanja</section>
                  <section class="sub-tablist">daftar transaksi top-up & tagihan</section>
                  <section class="sub-tablist">daftar travel & entertainment</section>
                  <section class="sub-tablist">daftar investasi</section>
                  <section class="sub-tablist">daftar transaksi print</section>
              </div>
              <div class="history-nav">
                  <div class="date-transaction">
                      <label for="tgl">Lihat Transaksi :</label>
                      <input type="date" id="tgl">
                  </div>
                  <select class="sorting">
                      <option value="0">Urutkan</option>
                  </select>
                  <h3>Reset Filter</h3>
                 <div class="search-adress">
                  <input type="text" placeholder="Cari Produk" class="input-src">
                  <div class="icon-src"><i class="fas fa-search-location"></i></div>
                </div>
              </div>
              <div class="status">
                  <h3>Filter Status</h3>
                  <div class="filter">
                      <div class="all">Semua</div>
                      <div class="all">Menunggu Konfirmasi</div>
                      <div class="all">Pesanan Di Proses</div>
                      <div class="all">Pesanan Dikirim</div>
                      <div class="all">Pesanan Tiba </div>
                  </div>
              </div>
              <div class="card-history">
                  <div class="date-pay">
                      <p>4 April 2020</p>
                      <button class="nxt-day">Next day</button>
                  </div>
                  <div class="store-name">
                      <div class="str-info">
                          <h3>ROBOT OFFICIAL STORE</h3>
                      </div>
                      <div class="status-order">
                          <p>status</p>
                          <h3>Pensanan Selesai</h3>
                      </div>
                      <div class="total-order">
                          <p>Total belanja</p>
                          <h3>Rp 74.900</h3>
                      </div>
                  </div>
                  <div class="detail-product">
                      <img src="../assets/img/default_toped-26.jpg" alt="">
                      <div class="ttl-prdk">
                          <h3>ROBOT M210 2.4G Wireless Optical USB
                              Mouse - Garansi Resmi 1 Tahun - Hitam</h3>
                          <p>Rp. 56.900</p>
                      </div>
                      <div class="ttl-price">
                          <p>Total Harga Peoduk</p>
                          <h3>Rp. 56.900</h3>
                      </div>
                      <button class="btn-buy">Beli Lagi</button>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar/Navbar.vue';
import editSidebar from '../components/base/editSideBar.vue';

export default {
  name: 'history',
  components: {
    editSidebar,
    Navbar,
  },
};
</script>

<style scoped>
    .container-history{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 150px;
    }
    .flash-info{
        display: flex;
        width: 1190px;
        height: 126px;
        background: rgb(235, 246, 246);
        border-radius: 8px;
        padding: 12px 16px 24px;
        margin-bottom: 50px;
    }
    .flash-info h3{
        color: rgba(49, 53, 59, 0.96);
        font-size: 16px;
    }
    .flash-info p{
        width: 100%;
        color: rgba(49, 53, 59, 0.96);
        font-size: 14px;
    }
    .flash-info img{
        width: 35px;
        height: 35px;
        border-radius: 50%;
    }
    .content{
        display: flex;
    }
    .main-history{
        /* position: relative; */
        display: flex;
        flex-direction: column;
        width: 920px;
        height: 100%;
        border: 1px solid rgb(224, 224, 224);
        border-radius: 8px;
        margin: 0 0 0 56px;
        /* padding: 0 0 0 30px; */
    }
    .tablist{
        display: flex;
        width: 100%;
        height: 53px;
        border-bottom: 1px solid rgb(224, 224, 224);
    }
    .sub-tablist{
        margin: 13px;
        font-size: 14px;
        color: rgba(49, 53, 59, 0.32);
    }
    .sub-tablist-active{
        margin: 13px;
        height: 40px;
        font-size: 14px;
        font-weight: 700;
        color: #03ac0e;
        border-bottom: 2px solid #03ac03;
    }
    .history-nav{
        display: flex;
        width: 920px;
        justify-content: space-around;
        margin: 20px 0;
    }
    .history-nav h3{
        font-size: 14px;
        color: #42b549;
        font-weight: 700;
        margin: 0 10px 0 0;
        width: 70px;
    }
    .date-transaction{
        display: flex;
        align-items: center;
        width: 290px;
        height: 40px;
        padding: 7.5px 12px;
        border: 1px solid rgba(0, 0, 0, 0.12);
        border-radius: 8px;
        margin: 0 20px;
    }
    .date-transaction label{
        font-size: 12px;
        color: rgba(0, 0, 0, 0.12);
        margin-right: 20px;
        margin-top: 5px;
    }
    .date-transaction input{
        width: 150px;
        border: none;
    }
    .sorting{
        width: 160px;
        height: 40px;
        padding: 0 8px 0 16px;
        border: 1px solid rgba(0, 0, 0, 0.12);
        border-radius: 8px;
        margin: 0 10px 0 0;
    }
    .status{
        display: flex;
        width: 888px;
        height: 40px;
        margin-bottom: 30px;
    }
    .status h3{
        font-size: 14px;
        color: black;
        font-weight: 700;
        margin: 10px 15px;
    }
    .filter{
        display: flex;
        width: 700px;
        height: 50px;
    }
    .all{
        display: flex;
        align-items: center;
        height: 40px;
        padding: 0 12px;
        border-radius: 8px;
        border: 1px solid rgba(0, 0, 0, 0.12);
        font-size: 12px;
        margin: 0 8px 0 0;
    }
  .search-adress{
    display: flex;
    height: 44px;
    width: 300px;
    border: solid 2px rgba(0,0,0,.12);
    border-radius: 5px;
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
  .card-history{
      width: 888px;
      height: 240px;
      border-radius: 8px;
      box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 10px 0px;
      margin: 15px;
  }
  .date-pay{
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 37px;
      font-size: 12px;
      padding: 8px 16px;
  }
  .date-pay p{
      color: rgba(49, 53, 59, 0.68);
  }
  .nxt-day{
      width: 62px;
      height: 20px;
      background: #4fd15a;
      color: #ffffff;
      font-size: 10px;
      border-radius: 8px;
      margin: 0 0 0 8x;
      padding: 0 8px;
      border: none;
  }
  .store-name{
      display: flex;
      width: 100%;
      height: 73px;
      padding: 8px 16px;
      margin-bottom: 20px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  }
  .detail-product{
      display: flex;
      width: 100%;
      height: 141px;
  }
  .str-info{
      width: 350px;
      border-right: 1px solid rgba(0, 0, 0, 0.12);
  }
  .str-info h3{
      color: #42b549;
      font-size: 14px;
      font-weight: 600;
  }
  .status-order{
      display: flex;
      flex-direction: column;
      width: 300px;
      padding: 0 16px;
      border-right: 1px solid rgba(0, 0, 0, 0.12);
  }
  .status-order p{
      color: rgba(49, 53, 59, 0.68);
      font-size: 12px;
  }
  .status-order h3{
      color: rgba(49, 53, 59, 0.68);
      font-size: 14px;
      font-weight: 600;
  }
  .total-order{
        display: flex;
        flex-direction: column;
        padding: 0 16px;
    }
  .total-order p{
        color: rgba(49, 53, 59, 0.68);
        font-size: 12px;
    }
  .total-order h3{
        color: rgba(49, 53, 59, 0.68);
        font-size: 14px;
        font-weight: 600;
    }
    .detail-product{
        display: flex;
    }
    .detail-product img{
        width: 56px;
        height: 56px;
        padding: 0 0 0 16px;
    }
    .btn-buy{
        width: 116px;
        height: 32px;
        background: #fa591d;
        color: #ffffff;
        padding: 0 16px;
        border: none;
        border-radius: 8px;
        margin-left: 30px;
    }
    .ttl-prdk{
        display: flex;
        flex-direction: column;
        width: 294px;
        height: 80px;
        padding: 0 16px;
        border-right: 1px solid rgba(0, 0, 0, 0.12);
    }
    .ttl-prdk h3{
        color: #42b549;
        font-size: 14px;
        font-weight: 700;
    }
    .ttl-prdk p{
        color: #fa591d;
        font-size: 12px;
    }
    .ttl-price{
        display: flex;
        flex-direction: column;
        width: 300px;
        height: 80px;
        border-right: 1px solid rgba(0, 0, 0, 0.12);
        padding: 0 16px;
    }
    .ttl-price p{
        color: rgba(49, 53, 59, 0.68);
        font-size: 12px;
    }
    .ttl-price h3{
        color: #fa591d;
        font-size: 14px;
        font-weight: 700;
    }
</style>
