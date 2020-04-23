<template>
  <div class="container-edit-bank">
    <div class="th-list">
      <div class="txt-info">
        <h2>Daftar Rekening Bank</h2>
        <ul>
          <li>Akun rekening bank yang akitf maksimal berjumlah 3 (tiga) buah.</li>
          <li>Akun bank utama tidak bisa dihapus</li>
        </ul>
      </div>
      <button class="btn-add-rek">Tambah Rekening</button>
    </div>
    <div class="td-list">
      <div class="logo-bank">
        <img src="../../assets/img/icon-bni.gif" alt="">
      </div>
      <div class="info-rek">
        <p>PT. BANK NEGARA INDONESIA (BNI) (PERSERO)</p>
        <h5>0904150850 <span class="hulk">Rekening Utama</span></h5>
        <h5>a.n SHILFIYA AMANI</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'editBank',
};
</script>

<style scoped>
  .container-edit-bank{
    display: none;
    flex-direction: column;
    margin-top: 50px;
    align-items: center;
    width: 890px;
    height: 220px;
    font-family: 'Open Sans', sans-serif;
  }
  .th-list{
    display: flex;
    width: 890px;
    height: 81px;
    margin-left: 100px;
    justify-content: space-between;
  }
  .txt-info{
    display: flex;
    flex-direction: column;
  }
  .txt-info li{
    font-size: 12px ;
  }
  .txt-info h2{
    font-size: 24px;
    margin-bottom: 10px;
  }
  .btn-add-rek{
    width: 139.59px;
    height: 40px;
    padding: 0px 16px;
    background: #03ac0e;
    color: #ffffff;
    font-size: 12px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }
  .td-list{
    display: flex;
    width: 890px;
    height: 99px;
    padding: 24px 0px;
    margin-left: 100px;
  }
  .info-rek{
    display: flex;
    flex-direction: column;
  }
  .td-list p{
    font-size: 12px;
  }
  .td-list h5{
    font-size: 16px;
  }
  .logo-bank img{
    width: 80px;
    height: 26.05px;
    margin-right: 50px;
  }
  .hulk{
    height: 20px;
    font-size: 10px;
    padding: 0px 8px;
    color: #ffffff;
    background: #4fd15a;
    border-radius: 4px;
    margin-left: 10px;
    /* margin-top: 10px; */
  }
</style>
