<template>
  <div>
    <div class="container-register">
      <section>
        <div class="row-fluid">
          <div class="left-side">
            <div class="img-register">
              <img src="@/assets/img/toped-open-shop.png" alt="">
              <h2>Jual Beli Mudah Hanya di Tokopedia</h2>
              <p>Gabung dan rasakan kemudahan bertransaksi di Tokopedia</p>
            </div>
          </div>
          <div class="right-side">
            <div class="form-register">
              <div v-if="code === 0">
                <div class="footer-register">
                  <p>Halo, <b>Harun</b> ayo isi detail tokomu!</p>
                </div>
                <div class="form-email">
                  <label for="toko">Nama Toko</label>
                  <div class="form-input">
                    <input
                    v-model="test"
                    type="text"
                    id="toko">
                    <div class="error-msg">
                      <p class="length-msg">
                      {{test.length}}/16</p>
                      <p class="default-msg">
                      Nama tidak bisa diubah lagi</p>
                    </div>
                  </div>
                </div>
                <div class="form-email">
                  <label for="link-toko">Link Toko</label>
                  <div class="form-input">
                    <span>www.tokopedia.com/</span>
                    <input
                    v-model="test"
                    type="text"
                    id="link-toko">
                    <div class="error-msg">
                      <p class="length-msg">
                      {{test.length}}/16</p>
                    </div>
                  </div>
                </div>
                <div class="form-email">
                  <label for="city">Kota atau Kecamatan</label>
                  <div class="form-input">
                    <input
                    v-model="location"
                    type="text"
                    id="city">
                    <div class="error-msg">
                    </div>
                  </div>
                </div>
                <div class="user-checkbox">
                  <input type="checkbox" id="checkbox">
                  <label for="checkbox">Saya setuju dengan
                  <router-link to="/terms"> syarat dan ketentuan</router-link>,<br>
                  serta <router-link to="/terms">kebijakan privasi</router-link> Tokopedia</label>
                </div>
                <div class="button">
                  <button @click="openshop">Buka Toko Gratis</button>
                </div>
              </div>
              <div v-if="code === 1">
                <div class="ceklis-img">
                  <img src="@/assets/img/ceklis.svg" alt="">
                </div>
                <div class="header-succes">
                  <h2> {{test}} </h2>
                  <p>berhasil dibuka</p>
                </div>
                <div class="button-grp">
                  <router-link to="/addproduct" class="tambahproduk">Tambah Produk</router-link>
                  <router-link to="/profilestore" class="halamantoko">Ke Halaman Toko</router-link>
                </div>
                <div class="isi-success">
                  <b>Layanan kurir di areamu otomatis<br>diaktifkan.</b>
                  <p>Yuk, tambahkan produk <br>pertamamu untuk memulai berjualan</p><br>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <footer>
      <div class="container-footer">
          <p>© 2009-2020, PT Tokopedia</p>
      </div>
    </footer>

  </div>
</template>

<script>
import Axios from 'axios';

export default {
  data() {
    return {
      test: '',
      location: '',
      code: 0,
    };
  },
  methods: {
    openshop() {
      Axios.post('http://192.168.1.97:5000/api/arkapedia/admin/shop', {
        name: this.test, location: this.location,
      }, { headers: { 'baca-bismillah': localStorage.token } })
        .then((res) => {
          console.log(res);
          this.code = 1;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
/* Succes Create */
.ceklis-img{
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
}
.header-succes{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
}
.header-succes h2{
  font-weight: 800;
  font-size: 18px;
}
.header-succes p{
  font-size: 14px;
}
.button-grp{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.tambahproduk{
  display: flex;
  justify-content: center;
  width: 294px;
  height: 48px;
  align-items: center;
  color: #fff;
  font-size: 16px;
  font-weight: 800;
  padding: 0 16px;
  background: rgb(3, 172, 14);
  border: 1px solid rgb(3, 172, 14);
  box-sizing: border-box;
  border-radius: 8px;
  outline: none;
  text-decoration: none;
}
.halamantoko{
  color: rgba(49, 53, 59, 0.68);
  display: flex;
  justify-content: center;
  width: 294px;
  height: 48px;
  align-items: center;
  font-size: 16px;
  font-weight: 800;
  padding: 0 16px;
  background: white;
  border: 1px solid white;
  box-sizing: border-box;
  border-radius: 8px;
  outline: none;
  text-decoration: none;
}
.isi-success{
  text-align: center;
  font-size: 15px;
}
/*  */
.container-register{
  display: flex;
  justify-content: center;
}
section{
  width: 1190px!important;
  margin-bottom: 20px;
  background: white;
}
.row-fluid{
  position: relative;
  display: flex;
  align-items: center;
  min-height: 621px;
  margin-bottom: 20px;
}
.img-register{
  float: right;
  margin-right: 80px;
  max-width: 500px;
  text-align: center;
}
.img-register img{
  width: 360px;
  margin-bottom: 31px;
  object-fit: contain;
}
.img-register h2{
  font-weight: 600;
  margin-bottom: 5px;
  font-size: 23px;
  color: rgba(0,0,0,.7);
}
.img-register p{
  margin-bottom: 10px;
  font-size: 13px;
  color: #606060;
}

/* Form Input */
.left-side{
  width: 50%;
}
.right-side{
  margin-left: 2px;
  width: 50%;
  background: white;
}
.form-register{
  border: 1px solid rgb(229, 231, 233);
  box-shadow: 0 0 10px 0 rgba(0,0,0,.1)!important;
  border-radius: 3px;
  width: 400px;
  padding: 24px 16px;
  box-sizing: border-box;
  margin: 0 0 0 50px;
}
.header-register{
  position: relative;
  display: block;
  margin-bottom: 32px;
  text-align: center;
}
.header-register h2{
  font-weight: 600;
  font-size: 22px;
  color: rgba(0,0,0,.7);
  margin-bottom: 8px;
}
.header-register label{
  font-size: 14px;
  text-align: center;
  color: rgba(0,0,0,.54);
}
.header-register a{
  text-decoration: none;
  color: #42b549;
  cursor: pointer;
  font-weight: 600;
}
.footer-register{
  text-align: center;
  margin-top: 15px;
}
.footer-register p{
  font-size: 1rem;
  font-weight: 400;
  /* color: rgba(0,0,0,.38); */
  margin: 0px 0px 32px;
}
.form-email{
  position: relative;
  margin-bottom: 16px;
}
.form-email label{
  margin-bottom: 4px;
  color: rgba(49, 53, 59, 0.68);
  font-size: 14px;
}
.form-input input{
  border-radius: 8px;
  padding: 10px 16px;
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  color: rgba(49, 53, 59, 0.96);
  box-shadow: none;
  border: 1px solid rgb(224, 224, 224);
  outline: none;
}
.default-msg{
  font-size: 13px;
  color: rgba(49, 53, 59, 0.68);
  display: block;
}
.form-input span{
  color: rgba(49, 53, 59, 0.44);
  font-size: 1rem;
  width: 50%;
  padding-right: 10px;
}
#link-toko{
  width: 53%;
}
.length-msg{
  font-size: 13px;
  color: rgba(49, 53, 59, 0.68);
  position: relative;
  float: right;
  right: 5px;
}
#checkbox{
  width: 20px;
  height: 20px;
  cursor: pointer;
  top: -10px;
  position: relative;
  margin-right: 15px;
  outline: none;
}
.user-checkbox label{
  top: 0px;
  color: rgba(49, 53, 59, 0.68);
  font-size: 13px;
  position: relative;
}
.user-checkbox a{
  text-decoration: none;
  color: rgb(66, 181, 73);
}
.user-checkbox{
  margin: 16px 0;
  position: relative;
}
.button{
  width: 100%;
  display: flex;
  justify-content: center;
}
.button button{
  width: 100%;
  color: #fff;
  font-weight: 800;
  border-radius: 8px;
  outline: none;
  padding: 0 16px;
  box-sizing: border-box;
  background: rgb(3,172,14);
  height: 48px;
  border: none;
}

/* Footer */
footer{
  border-top: 1px solid #e0e0e0;
  height: 110px;
  display: flex;
  align-items: center;
}
.container-footer{
  margin: 0 50px;
}
.container-footer p{
  font-size: 11px;
  color: rgba(0,0,0,.38);
}
</style>
