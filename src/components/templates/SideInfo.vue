<template>
  <div class="side-info">
    <section class="people-name">
      <img src="../../assets/img/default_toped-26.jpg" alt="">
      <div class="name-status">
        <h1>{{ name }}</h1>
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
  </div>
</template>

<script>
export default {
  name: 'editSideBar',
  props: [
    'name',
  ],
  data() {
    return {
      purchase: true,
      inbox: true,
      storeHide: true,
      prflHide: true,
    };
  },
};
</script>

<style scoped>
  .side-info{
    display: flex;
    flex-direction: column;
    width: 250px;
    border: 1px solid #e0e0e0;
    background: #fff;
    border-radius: 4px;
    font-family: 'Open Sans', sans-serif;
    margin: 0 auto;
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
