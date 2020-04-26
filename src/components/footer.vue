<template>
  <div class="footer">
    <div class="container footer-link">
      <ul class="parent-footer one">
        <li class="title">Tokopedia</li>
        <li>Tentang Tokopedia</li>
        <li>Karir</li>
        <li>Blog</li>
        <li>Tokopedia Saham</li>
        <li>Hotel</li>
        <li>Bridestory</li>
        <li>Parentstory</li>
        <li>Kamus Tokopedia</li>
        <li>Official Store</li>
        <li>Aplikasi Tokopedia</li>
        <li>Tagihan & Top up</li>
        <li>Deals Tokopedia</li>
        <li>Keuangan</li>
        <li>Bebas Ongkir</li>
        <li>Tukar Tambah Handphone</li>
        <li>Paket Umroh</li>
        <li>Alquran Online</li>
        <li>Kotak Kejutan</li>
      </ul>
      <div class="parent-footer two">
          <li class="title">Beli</li>
          <li>Tiket Kereta</li>
          <li>Tiket Pesawat</li>
          <li>Tiket Events</li>
          <li>Hotlist</li>
          <li>Kategori</li>
          <br>
          <li class="title">Jual</li>
          <li>Pusat Edukasi Seller</li>
          <li>Mitra Toppers</li>
          <li>Daftar Official Store</li>
      </div>
      <div class="parent-footer three">
          <li class="title">Bantuan dan Panduan</li>
          <li>Tokopedia Care</li>
          <li>Syarat dan Ketentuan</li>
          <li>Kebijakan Privasi</li>
      </div>
      <div class="four">
        <img src="https://ecs7.tokopedia.net/assets-unify/img/il-footer-2.jpg" alt="img">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer',
};
</script>

<style scoped>
  .footer{
    margin-top: 100px;
    border-top: 4px solid rgba(0, 0, 0, 0.1);
    width: 100%;
    border-bottom: 4px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 1px 6px 0 rgba(49,53,59,0.12);
    padding: 50px;
  }
  .four img{
    max-width: 500px;
  }
  .footer-link{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .parent-footer{
    margin-right: 80px;
  }
  li:hover{
    color: #03AC0E;
    text-decoration: none;
    font-weight: 600;
  }
  a{
    color: rgba(0,0,0,.54);
    font-size: 13px !important;
    font-weight: 600;
  }
  li{
    list-style: none;
    font-size: 12px;
    padding: 5px 0;
    font-weight: 600;
    cursor: pointer;
  }
  .title{
    font-size: 14px;
    font-weight: 800;
  }
  .title:hover{
    color: inherit;
    font-weight: 800;
  }

</style>
