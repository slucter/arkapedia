<template>
  <div class="main-edit-profil">
    <div class="name-admin">
      <i class="far fa-user"></i>
      <h3>Shilfiya Amani</h3>
    </div>
    <div class="profile-setting-container">
      <div class="profile-setting-tablist">
        <section class="tablist">Biodata Diri</section>
        <section class="tablist">Daftar Alamat</section>
        <section class="tablist">Pembayaran</section>
        <section class="tablist">Rekening Bank</section>
        <section class="tablist"> Notifikasi</section>
        <section class="tablist">Keamanan</section>
        <section class="tablist">Google Authenticator</section>
      </div>
      <settingPage/>
      <editAdress/>
      <editPayment/>
      <editBank/>
    </div>
  </div>
</template>

<script>
import settingPage from '../module/settingPage.vue';
import editAdress from '../module/editAdress.vue';
import editPayment from '../module/editPayment.vue';
import editBank from '../module/editBank.vue';

export default {
  name: 'mainEditProfile',
  components: {
    settingPage,
    editAdress,
    editPayment,
    editBank,
  },
};
</script>

<style scoped>
  .main-edit-profil{
    display: flex;
    flex-direction: column;
    height: 654.77px;
    width: 967px;
    margin: 10px 0 0 20px;
    font-family: 'Open Sans', sans-serif;
  }
  .name-admin{
    margin-bottom: 16px;
    display: flex;
  }
  .name-admin h3{
    font-size: 16px;
    margin-left: 5px;
    margin-top: -2px;
  }
  .profile-setting-container{
    /* height: 100%; */
    width: 967px;
    border-radius: 8px;
    background: #ffffff;
    border-radius: 4px;
    border: 1px solid #e0e0e0 ;
  }
  .profile-setting-tablist{
    display: flex;
    height:  49px;
    width: 965px;
    border-bottom: 1px solid #e0e0e0 ;
  }
  .tablist{
    display: flex;
    padding: 14px 8px;
    color: #606060;
    font-size: 13px;
    margin: 0 0 0 20px;
    cursor: pointer;
  }
</style>
