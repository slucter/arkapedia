<template>
  <div>
    <div class="test" v-if="msg === 1">
      <div class="modal-msg">
        <img @click="closemodal" src="@/assets/img/button-close.svg" alt="">
        <div class="header-modal-msg">
          <h2>Email Sudah Terdaftar</h2>
        </div>
        <div class="content-modal-msg">
          <p>Lanjut masuk dengan email ini <br> {{email}}?</p>
        </div>
        <div class="button-modal-msg">
          <button @click="closemodal" class="ubah-modal">Ubah</button>
          <router-link to="/login" class="masuk-modal">Ya,Masuk</router-link>
        </div>
      </div>
    </div>
    <NavbarLogin/>
    <div class="container-register">
      <section>
        <div class="row-fluid">
          <div class="left-side">
            <div class="img-register">
              <img src="@/assets/img/register_new.png" alt="">
              <h2>Jual Beli Mudah Hanya di Tokopedia</h2>
              <p>Gabung dan rasakan kemudahan bertransaksi di Tokopedia</p>
            </div>
          </div>
          <div class="right-side">
            <div class="form-register">
              <div v-if="code === 1">
                <div class="header-register">
                  <h2>Daftar Sekarang</h2>
                  <label>Sudah punya akun Tokopedia? <router-link
                  to="/login">Masuk</router-link></label>
                </div>
                <div class="form">
                  <div class="button-link">
                    <button class="facebook">Facebook</button>
                    <button class="google">Google</button>
                  </div>
                  <div class="separator">
                    <span class="hline"></span>
                    <span class="text-separator">atau daftar dengan</span>
                    <span class="hline"></span>
                  </div>
                  <!-- <div class="user-input">
                    <label for="email">Nomor Ponsel atau Email</label>
                  </div> -->
                  <div class="form-email">
                    <label for="email">Nomor Ponsel atau Email</label>
                    <div class="form-input">
                      <input
                      v-model.trim="$v.email.$model"
                      type="email"
                      id="email">
                      <div class="error-msg">
                        <p class="default-msg" v-if="!$v.email.required || $v.email.email">
                        Contoh: email@tokopedia.com</p>
                        <p class="error-email" v-if="!$v.email.email">Format Email Salah!</p>
                      </div>
                    </div>
                  </div>
                  <div class="button-register">
                    <button
                    v-if="$v.email.email && $v.email.required"
                    class="green-button"
                    @click="ubah">Daftar</button>
                    <button
                    v-if="!$v.email.email || !$v.email.required"
                    class="default-button">Daftar</button>
                  </div>
                </div>
              </div>
              <div v-if="code === 0">
                <div class="header-register-2">
                  <router-link to="/register" @click="ubah">
                    <i @click="ubah" class="material-icons">keyboard_backspace</i>
                  </router-link>
                  <h2>Daftar dengan Email</h2>
                  <label> {{email}} </label>
                </div>
                <div>
                  <div class="form-email">
                    <div class="alertdiv" v-if="alert === 1">
                      <p class="alert">Login Succes Please Check Your <a href="https://mail.google.com/mail/">Email</a></p>
                    </div>
                    <label for="name">Nama Lengkap</label>
                    <div class="form-input">
                      <input
                      v-model.trim="$v.name.$model"
                      type="text"
                      id="name">
                      <img src="@/assets/img/check.png"
                      v-if="$v.name.minLength && $v.name.required">
                      <div class="error-msg">
                        <p class="error-email" v-if="!$v.name.minLength">
                          Nama lengkap terlalu pendek, minimum 3 karakter</p>
                      </div>
                    </div>
                  </div>
                  <div class="form-email">
                    <label for="password">Kata Sandi</label>
                    <div class="form-input">
                      <input
                      v-model.trim="$v.password.$model"
                      :type="type"
                      id="password">
                      <img src="@/assets/img/check.png"
                      v-if="$v.password.required && $v.password.minLength">
                      <i class="material-icons" id="on" @click="show"
                      v-if="btnShow === 1">visibility</i>
                      <i class="material-icons" id="off" @click="hide"
                      v-if="btnShow !== 1" >visibility_off</i>
                      <div class="error-msg">
                        <p
                        v-if="!$v.password.minLength"
                        class="error-password-msg">Kata sandi terlalu pendek, minimum 6 karakter</p>
                      </div>
                    </div>
                  </div>
                  <div class="button-register">
                    <button
                    v-if="$v.name.minLength && $v.name.required
                    && $v.password.minLength && $v.password.required"
                    @click="register"
                    class="green-button">Selesai</button>
                    <button
                    v-if="!$v.password.minLength || !$v.password.required
                    || !$v.name.required || !$v.name.minLength"
                    class="default-button">Selesai</button>
                  </div>
                </div>
              </div>
              <div class="footer-register">
                <p>Dengan mendaftar, saya menyetujui <br>
                <router-link to="/terms">Syarat dan Ketentuan</router-link>
                 serta <router-link to="/terms"> Kebijakan Privasi</router-link></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <footer>
      <div class="container-footer">
          <p>© 2009-2020, PT Tokopedia | <router-link to="/help"> Bantuan </router-link></p>
      </div>
    </footer>

  </div>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators';
import NavbarLogin from '@/components/module/NavbarLogin.vue';
import axios from 'axios';

export default {
  data() {
    return {
      type: 'password',
      btnShow: 1,
      email: '',
      password: '',
      name: '',
      code: 1,
      alert: 0,
      msg: 0,
    };
  },
  components: {
    NavbarLogin,
  },
  // created() {
  //   if (localStorage.token !== null) {
  //     this.$router.push('/');
  //   }
  // },
  methods: {
    register() {
      axios.post('http://192.168.1.97:5000/api/arkapedia/auth/signup', {
        email: this.email, name: this.name, password: this.password,
      })
        .then((res) => {
          this.alert = 1;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    show() {
      this.type = 'text';
      this.btnShow = 2;
    },
    hide() {
      this.type = 'password';
      this.btnShow = 1;
    },
    closemodal() {
      this.msg = 0;
    },
    ubah() {
      // event.preventDefault();
      if (this.code === 1) {
        axios.post('http://192.168.1.97:5000/api/arkapedia/checkUser', {
          email: this.email,
        })
          .then((res) => {
            if (res.data.status === 1) {
              this.code = 0;
            } else {
              this.code = 2;
              console.log(this.code);
            }
          })
          .catch(() => {
            this.msg = 1;
          });
      } else {
        this.code = 1;
      }
      // this.code = 1;
    },
  },
  validations: {
    email: {
      required,
      email,
    },
    name: {
      required,
      minLength: minLength(3),
    },
    password: {
      required,
      minLength: minLength(6),
    },
  },
};
</script>

<style scoped>
/* Modal */
.test{
  position: fixed;
  width: 100vw!important;
  height: 100vh!important;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.4);;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-msg{
  border-radius: 10px;
  background: white;
  width: 420px;
  height: 208px;
}
.modal-msg img{
  position: relative;
  right: 10px;
  top: 10px;
  float: right;
  cursor: pointer;
}
.header-modal-msg{
  width: 100%;
  position: relative;
  margin-top: 30px;
  text-align: center;
}
.header-modal-msg h2{
  font-weight: 600;
  font-size: 18px;
  color: rgba(0,0,0,.7);
  margin-bottom: 10px;
}
.content-modal-msg{
  padding: 0 0 24px;
  text-align: center;
}
.content-modal-msg p{
  font-size: 14px;
  color: #606060;
}
.button-modal-msg{
  display: flex;
  justify-content: center;
}
.button-modal-msg button{
  margin: 0 4px;
  width: 158px;
  height: 44px;
}
.button-modal-msg a{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 4px;
  width: 158px;
  height: 44px;
  position: relative;
  text-decoration: none;
}
.ubah-modal{
  background: #fff;
  color: rgba(0,0,0,.54);
  border: 1px solid rgba(0,0,0,.12);
  font-weight: 600;
  border-radius: 3px;
  outline: none;
}
.masuk-modal{
  color: #fff;
  background: #42b549;
  border: 1px solid #42b549;
  font-weight: 600;
  border-radius: 3px;
  outline: none;
}
/* ALERT */
.alertdiv{
  background-color: whitesmoke;
  border-radius: 5px;
  font-size: 15px;
  /* border: 2px solid #42b549; */
  width: 100%;
  height: 60px;
}
.alert {
  position: absolute;
  margin-left: 10px;
  margin-top: 5px;
}
.alert a{
  color: #42b549;
  text-decoration: none;
  outline: none;
}
/* Content */
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
/* Form Register */
.left-side{
  width: 50%;
}
.right-side{
  margin-left: 2px;
  width: 50%;
  background: white;
}
.form-register{
  border: 1px solid #e0e0e0;
  box-shadow: 0 0 10px 0 rgba(0,0,0,.1)!important;
  border-radius: 3px;
  width: 400px;
  padding: 24px 40px 32px;
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
.button-link{
  display: flex;
  margin-bottom: 16px;
  justify-content: space-between;
}
.button-link button{
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-weight: 600;
  outline: none;
  padding: 8px 16px;
  text-align: center;
  font-size: 14px;
  box-sizing: border-box;
  background: white;
  color: rgba(0,0,0,.7)!important;
  width: 151px;
  height: 48px;
}
.separator{
  margin: 24px 0;
  display: flex;
  align-items: center;
}
.text-separator{
  font-size: 12px;
  text-align: center;
  padding: 0 18px;
  color: rgba(0,0,0,.38);
}
.hline{
  display: inline-block;
  border: .5px solid rgba(0,0,0,.12);
  width: 27%;
}
/* Form */
.form-email{
  position: relative;
}
.form-email label{
  color: rgba(0,0,0,.54);
  font-size: 12px;
  margin-bottom: 7px;
  display: block;
}
.form-input{
  position: relative;
  margin-bottom: 10px;
}
.form-input input{
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  border-radius: 3px;
  border: 1px solid #e0e0e0;
  color: rgba(0,0,0,.7);
  transition: border .2s linear;
  padding: 10px 14px;
  outline: #42b549;
  margin-bottom: 4px;
}
.form-input i{
  display: inline-block;
  /* float: right; */
  /* top: -20px; */
  cursor: pointer;
  right: 10px;
  top: 9px;
  right: 10px;
  position: absolute;
  color: #e0e0e0;
}
.error-msg{
  position: relative;
  height: 14px;
  margin-bottom: 5px;
}
.error-password-msg{
  color: #d50000;
  font-size: 13px;
}
.error-email{
  font-size: 13px;
  color: #d50000!important;
}
.default-msg{
  font-size: 13px;
  color: #9E9E9E;
}
.default-button{
  color: rgba(0,0,0,.26);
  border: none;
  display: block;
  width: 100%;
  border-radius: 4px;
  font-weight: 600;
  outline: none;
  font-size: 14px;
  height: 48px;
  text-align: center;
  box-sizing: border-box;
  pointer-events: none;
}
.green-button{
  color: #fff;
  border: none;
  display: block;
  width: 100%;
  border-radius: 4px;
  font-weight: 600;
  outline: none;
  font-size: 14px;
  height: 48px;
  text-align: center;
  box-sizing: border-box;
  background: #42b549;
}
.footer-register{
  text-align: center;
  margin-top: 15px;
}
.footer-register p{
  font-size: 12px;
  color: rgba(0,0,0,.38);
}
.footer-register a{
  text-decoration: none;
  color: #42b549;
}
/* Ini Footer */
footer{
  padding: 15px 0;
  width: 100%;
  border-top: .5px solid #e0e0e0;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
.container-footer{
  width: 1190px;
}
.container-footer p{
  color: #606060;
  font-size: 13px;
}
.container-footer a{
  text-decoration: none;
  color: #42b549;
}

/* register 2 */
.header-register-2{
  margin-bottom: 32px;
  position: relative;
  display: flex;
  flex-direction: column;
}
.header-register-2 a{
  text-decoration: none;
  color: #666666;
  position: absolute;
}
.header-register-2 h2{
  text-align: center;
  font-weight: 600;
  font-size: 22px;
  margin-bottom: 8px;
  color: rgba(0,0,0,.7);
}
.header-register-2 label{
  font-size: 14px;
  text-align: center;
  color: rgba(0,0,0,.54);
  position: relative;
}
.form-input img{
  position: relative;
  float: right;
  right: -22px;
  top: -30px;
  transition: all 3s ease-in;
}
</style>
