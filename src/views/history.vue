<template>
  <div class="container-history">
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
                  <div class="date-transaction"></div>
                  <div class="sorting"></div>
                  <h3>Reset Filter</h3>
                  <div class="search-by"></div>
              </div>
              <div class="status"></div>
              <div class="card-history"></div>
          </div>
      </div>
  </div>
</template>

<script>
import editSidebar from '../components/base/editSideBar.vue';

export default {
  name: 'history',
  components: {
    editSidebar,
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
</style>
